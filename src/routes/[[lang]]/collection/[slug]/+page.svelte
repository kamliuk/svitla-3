<script>
    import { page } from '$app/stores';
    import Title from '$lib/components/meta/title.svelte';
    import Slider from '$lib/components/collection/slider.svelte';
    import Product from '$lib/components/collection/product.svelte';
</script>

<Title beginning={$page.data.title} end={$page.data.static.global.meta.title} />

<svelte:head>
    <meta name="description" content={$page.data.static.global.meta.description}>
    <link rel="canonical" href={$page.data.static.global.url.base + $page.data.collection.urls[$page.data.lang]} />
    
    {#each Object.entries($page.data.collection.urls) as [lang, url] (lang) }
        <link rel="alternate" hreflang={lang} href={$page.data.static.global.url.base + url} />
    {/each}
</svelte:head>

<div class="2xl:flex grow self-stretch max-w-full h-full 2xl:h-auto">
    <div class="flex 2xl:grow-2 3xl:grow-3 2xl:basis-2 3xl:basis-3 max-w-full 2xl:max-w-1/2 3xl:max-w-2/3 min-h-full bg-neutral-400">
        {#key $page.data.collection.images[0]}
            <Slider
                images={$page.data.collection.images}
                title={$page.data.collection.title}
                isTitleLineHeightIncreased={$page.data.collection.isTitleLineHeightIncreased}
                description={$page.data.collection.description}
                prevUrl={$page.data.collection.prevUrl}
                nextUrl={$page.data.collection.nextUrl}
                prevText={$page.data.static.collection.prevText}
                nextText={$page.data.static.collection.nextText}
                dotText={$page.data.static.collection.dotText}
                socials={$page.data.static.global.socials}
            />
        {/key}
    </div>
    <div class="flex flex-col justify-end items-stretch 2xl:grow-2 2xl:basis-2">
        {#key $page.data.collection.product.images[0]}
            <Product
                images={$page.data.collection.product.images}
                id={$page.data.collection.product.id}
                title={$page.data.collection.product.title}
                url={$page.data.collection.product.url}
                ref={$page.data.static.collection.ref}
                button={$page.data.static.collection.button}
            />
        {/key}
    </div>
</div>