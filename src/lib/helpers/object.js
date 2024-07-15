const helperObject = {};

helperObject.isObject = item => {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

helperObject.mergeDeep = (target, ...sources) => {
    if (!sources.length) return target;
    const source = sources.shift();

    if (helperObject.isObject(target) && helperObject.isObject(source)) {
        for (const key in source) {
            if (helperObject.isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                helperObject.mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return helperObject.mergeDeep(target, ...sources);
}

export default helperObject;