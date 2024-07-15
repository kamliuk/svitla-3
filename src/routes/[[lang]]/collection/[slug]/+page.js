import { error } from '@sveltejs/kit';
import helperData from '$lib/helpers/data.js'
import helperObject from '$lib/helpers/object.js'

export async function load({ params, parent }) {

    if (typeof params.lang !== 'undefined' && !helperData.isLang(params.lang)) error(404);

    const lang = helperData.setLangOrDefault(params.lang);

    const collectionId = params.slug;

    let data;

    try {
        data = await helperData.get([
            'static/collection',
            'collection/{collectionId}'
        ], {lang, collectionId});
    } catch {
        error(404);
    }

    return helperObject.mergeDeep(await parent(), data);
}