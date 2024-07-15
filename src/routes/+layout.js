import helperUrl from '$lib/helpers/url.js'
import helperData from '$lib/helpers/data.js'
export const prerender = true;

export async function load({ url }) {

    const slugFirst = helperUrl.getFirstSlug(url.pathname);

    const lang = helperData.setLangOrDefault(slugFirst);

    const data = await helperData.get([
        'static/global',
        'static/error'
    ], {lang});

    data.lang = lang;

    return data;
}