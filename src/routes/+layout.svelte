<script>
    import '../app.css';
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import helperUrl from '$lib/helpers/url.js';
    import LangSwitcher from '$lib/components/global/lang-switcher.svelte';
    import Menu from '$lib/components/global/menu.svelte';

    let windowScrollY;

    $: isWindowScrolled = windowScrollY > 0;

    $: if (browser && $page) helperUrl.setHtmlLangByUrl($page.url.pathname);

    $: langUrls = $page.data.collection ? $page.data.collection.urls : helperUrl.getUrlsForAllLangs($page.url.pathname);

    beforeNavigate(() => {
        document.documentElement.classList.add('scroll-smooth');
    });

    afterNavigate(() => {
        document.documentElement.classList.remove('scroll-smooth');
    });
</script>

<svelte:window bind:scrollY={windowScrollY} />

<header class="fixed top-0 left-0 z-30 flex justify-between items-center w-full duration-300 lg:px-12 {isWindowScrolled ? 'py-3 bg-white shadow' : 'pt-3 lg:pt-12'}">
    <Menu
        text={$page.data.static.global.menu.text}
        closeText={$page.data.static.global.menu.closeText}
        links={$page.data.static.global.menu.list}
        urlCurrent={$page.url.pathname}
        isLight={!isWindowScrolled && $page.data.collection}
    />
    <LangSwitcher
        langs={$page.data.static.global.langs}
        langActive={$page.data.static.global.lang}
        {langUrls}
        isMobileLight={!isWindowScrolled && $page.data.collection}
    />
</header>
<div class="flex grow justify-center items-center h-full 2xl:h-auto">
    <slot />
</div>