<script>
    export let text;
    export let closeText;
    export let links;
    export let urlCurrent;
    export let isLight;

    const lines = [1,2,3];

    let isOpened = false;

    function show () {
        isOpened = true;
    }

    function hide () {
        isOpened = false;
    }
</script>

<button
    class="
        flex items-center ml-3 lg:ml-5.5 min-h-12 p-2 duration-150 hover:opacity-70 active:translate-y-px active:duration-0
        {isOpened ? 'pointer-events-none' : ''}
    "
    type="button"
    disabled={isOpened}
    tabindex={isOpened ? '-1' : '0'}
    on:click={show}
>
    <span class="flex flex-col mr-1.25">
        {#each lines as line (line) }
            <span class="w-4.5 h-0.5 my-0.75 duration-150 {isLight ? 'bg-white' : 'bg-stone-900'}"></span>
        {/each}
    </span>
    <span class="ml-5 lg:ml-7 text-1.5lg duration-150 {isLight ? 'text-white' : 'text-stone-900'}">{text}</span>
</button>
<div class="fixed left-0 top-0 w-60 h-full pt-3 bg-white {isOpened ? 'shadow-md duration-300' : '-translate-x-full duration-150'}">
    <div class="absolute top-0 right-0 z-10 w-12 h-12">
        <button
            class="
                relative right-0 w-full h-full hover:opacity-65 active:scale-90
                {isOpened ? 'duration-150' : 'pointer-events-none opacity-0 hover:opacity-0 duration-75'}
            "
            type="button"
            aria-label={closeText}
            disabled={!isOpened}
            tabindex={isOpened ? '0' : '-1'}
            on:click={hide}
        >
            <span class="absolute top-1/2 left-1/2 w-4 h-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-stone-900"></span>
            <span class="absolute top-1/2 left-1/2 w-4 h-0.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-stone-900"></span>
        </button>
    </div>
    <div class="flex flex-col">
        {#each links as link (link.url)}
            {@const isLinkCurrent = link.url === urlCurrent}
            {@const isDisabled = !isOpened || isLinkCurrent}
            <a
                class="
                    px-6 py-1.5 text-lg break-words text-stone-900 duration-150 hover:opacity-65 active:translate-y-px active:duration-0
                    {isDisabled ? 'pointer-events-none' : ''}
                    {isLinkCurrent ? 'font-semibold' : ''}
                "
                href={link.url}
                tabindex={isDisabled ? '-1' : '0'}
                on:click={hide}
            >{link.text}</a>
        {/each}
    </div>
</div>