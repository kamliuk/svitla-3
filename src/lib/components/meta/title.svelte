<script>

    export let beginning;
    export let end;

    $: fullTitle = (beginning ? beginning + ' - ' : '') + end;
</script>

<svelte:head>
    <title>{fullTitle}</title>
</svelte:head>