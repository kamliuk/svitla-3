<script>
    export let isVisible;
    export let src;
    export let width;
    export let height;
    export let alt;
    export let classes;
    export let classesVisible;
    export let classesInvisible;

    let tagImg;
    let isLoaded = false;

    $: isCompleted = typeof tagImg !== 'undefined' ? tagImg.complete : false;
    $: isReady = isLoaded || isCompleted;
</script>

<picture>
    <source srcset="{src}.webp" type="image/webp" />
    <img
        class="{classes} {isVisible && isReady ? classesVisible : classesInvisible}"
        src="{src}.jpg"
        {width}
        {height}
        {alt}
        bind:this={tagImg}
        on:load={() => isLoaded = true}
    />
</picture>