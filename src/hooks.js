import helperData from '$lib/helpers/data.js';

export function handle({event, resolve}) {

    const lang = helperData.setLangOrDefault(event.params.lang);

    return resolve(event, {
        transformPageChunk: ({html}) => html.replace('%lang%', lang)
    });
}