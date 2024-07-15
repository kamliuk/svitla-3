import helperObject from './object.js';

const helperData = {};

helperData.getLangDefault = () => 'en';

helperData.replaceVariablesInPath = (path, variables) => {

    for (const name in variables) {
        
        path = path.replaceAll('{' + name + '}', variables[name]);
    }
        
    return path;
}

helperData.getByPath = async (path, variables = {}, options = {}, dataModules) => {

    const langDefault = helperData.getLangDefault();
    const pathToData = '/src/lib/data/';
    const pathReplacedVariables = helperData.replaceVariablesInPath(path, variables);
    const lang = variables.lang ? variables.lang : langDefault;

    const pathToCommon = `${pathToData}${pathReplacedVariables}/common.js`;
    const pathToLocalized = `${pathToData}${pathReplacedVariables}/${lang}.js`;
    const pathToLocalizedDefault = `${pathToData}${pathReplacedVariables}/${langDefault}.js`;

    const pathDataCommon = (await dataModules[pathToCommon]()).default;

    let pathDataLocalized;

    if (!dataModules[pathToLocalized] && options.useLangDefaultIfLangNotFound) {

        pathDataLocalized = (await dataModules[pathToLocalizedDefault]()).default;
    } else {
        pathDataLocalized = (await dataModules[pathToLocalized]()).default;
    }

    return helperObject.mergeDeep(pathDataCommon, pathDataLocalized);
}

helperData.removeVariableSlugs = slugs => {

    return slugs.filter(slug => slug.indexOf('{') < 0);
} 

helperData.slugsToObjectRecursive = (slugsRemaining, objectCurrent = {}) => {

    const lastSlug = slugsRemaining.pop();

    objectCurrent = {[lastSlug]: objectCurrent};

    if (slugsRemaining.length) return helperData.slugsToObjectRecursive(slugsRemaining, objectCurrent)
    else return objectCurrent;
}

helperData.setStructureByPath = (path, pathData) => {

    const slugs = path.split('/');
    const slugsWithoutVariables = helperData.removeVariableSlugs(slugs);

    return helperData.slugsToObjectRecursive(slugsWithoutVariables, pathData);
}

helperData.get = async (paths, variables = {}, options = {}) => {

    let data = {};

    // Find all data modules for Vite via the import limitations
    const dataModules = import.meta.glob('$lib/data/**/*.js');

    for (const path of paths) {

        const pathData = await helperData.getByPath(path, variables, options, dataModules);
        const pathDataStructured = helperData.setStructureByPath(path, pathData);
        
        data = helperObject.mergeDeep(data, pathDataStructured);
    }

    return data;
}

helperData.getLangs = () => {

    const dataModules = import.meta.glob(['$lib/data/static/global/*.js', '!$lib/data/static/global/common.js']);

    let langs = [];

    Object.keys(dataModules).forEach(path => {

        const lang = path.substring(path.lastIndexOf('/') + 1).replace('.js', '');

        langs.push(lang);
    });

    return langs;
}

helperData.isLang = lang => helperData.getLangs().includes(lang);

helperData.setLangOrDefault = lang => helperData.isLang(lang) ? lang : helperData.getLangDefault();

export default helperData;