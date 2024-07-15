<script>
    import { page } from '$app/stores';
    import Title from '$lib/components/meta/title.svelte';
    import Socials from '$lib/components/global/socials.svelte';
    
</script>

<svelte:head>
    {#if ($page.data)}
        <meta name="description" content={$page.data.static.global.meta.description} />
        <meta name="robots" content="noindex" />
    {/if}
</svelte:head>

{#if ($page.data)}
    <Title beginning={$page.data.static.error.title} end={$page.data.static.global.meta.title} />

    <div class="pt-32 lg:pt-40 pb-38 lg:pb-46 max-w-full max-h-full text-center">
        <h1 class="mx-5 font-bold text-4xl break-words text-stone-900">{$page.data.static.error.title}</h1>
        <a
            class="mx-5 inline-block mt-4 text-lg break-words text-stone-900 underline"
            href={$page.data.static.error.link.url}
        >{$page.data.static.error.link.text}</a>
    </div>

    <div class="fixed left-1.5 lg:left-16.75 bottom-5 lg:bottom-15.75">
        <Socials
            links={$page.data.static.global.socials}
            isLight={false}
        />
    </div>
{/if}