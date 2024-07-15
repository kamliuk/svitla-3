<script>
    export let langs;
    export let langActive;
    export let langUrls;
    export let isMobileLight;
</script>

<div class="flex flex-wrap justify-center mr-1 lg:mr-0.5">
    {#each Object.entries(langs) as [lang, text] (lang)}
        {@const isDisabled = lang === langActive}
        <a
            class="
                lg:mx-3 p-4 font-bold duration-150 active:scale-90
                {isDisabled ? 'pointer-events-none' : (isMobileLight ? 'opacity-30 hover:opacity-60 2xl:opacity-20 2xl:hover:opacity-40' : 'opacity-20 hover:opacity-40')}
                {isMobileLight ? 'text-white 2xl:text-stone-900' : 'text-stone-900'}
            "
            href={langUrls[lang]}
            tabindex={isDisabled ? '-1' : null}
            data-sveltekit-noscroll
        >{text}</a>
    {/each}
</div>