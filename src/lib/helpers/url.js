import helperData from './data.js'

const helperUrl = {}

helperUrl.getFirstSlug = url => url.split('/')[1];

helperUrl.getUrlsForAllLangs = url => {

    const slugFirst = helperUrl.getFirstSlug(url);
    const langDefault = helperData.getLangDefault();
    const urlNoLang = helperData.isLang(slugFirst) ? url.slice(slugFirst.length + 1) : url;

    let urls = {};

    helperData.getLangs().forEach(lang => urls[lang] = lang === langDefault ? urlNoLang : '/' + lang + urlNoLang);

    return urls;
};

helperUrl.setHtmlLangByUrl = url => {

    const slugFirst = helperUrl.getFirstSlug(url);
    const lang = helperData.setLangOrDefault(slugFirst);

    document.documentElement.lang = lang;
}

export default helperUrl;