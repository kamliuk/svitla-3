<script>
    export let links;
    export let isLight;
</script>

<div class="flex flex-wrap justify-center items-center">
    {#each links as link, index (index) }
        <a
            class="
                flex justify-center items-center lg:mx-3 py-3 px-3.5 min-w-12 min-h-12 font-bold text-1.5sm duration-150 hover:opacity-70 active:scale-90
                {isLight ? 'text-white' : 'text-stone-900'}
            "
            href={link.url} target="_blank"
        >{link.text}</a>
    {/each}
</div>