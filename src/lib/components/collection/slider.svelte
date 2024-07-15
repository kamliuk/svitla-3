<script>
    import { onMount } from 'svelte';
    import Img from './img.svelte';
    import Socials from '$lib/components/global/socials.svelte';

    export let images;
    export let title;
    export let isTitleLineHeightIncreased;
    export let description;
    export let prevUrl;
    export let nextUrl;
    export let prevText;
    export let nextText;
    export let dotText;
    export let socials;

    const delay = 10000;

    let slideActive = 0;
    let timeout;

    onMount(() => {
        resetTimeout();

        return () => clearTimeout(timeout);
    });

    function resetTimeout () {

        clearTimeout(timeout);
        timeout = setTimeout(goNext, delay);
    }

    function goTo (slideFurther) {

        resetTimeout();
        slideActive = slideFurther;
    }

    function goPrev () {

        const slideFurther = slideActive - 1;

        goTo(slideFurther < 0 ? images.length - 1 : slideFurther);
    }

    function goNext () {

        const slideFurther = slideActive + 1;

        goTo(slideFurther < images.length ? slideFurther : 0);
    }
</script>

<div class="flex grow relative max-w-full">
    <div class="flex grow flex-col justify-between relative order-1 z-20 pt-32 lg:pt-40 pb-2 lg:pb-15.75 max-w-full">
        <!-- Content -->
        <h1 class="grow-26 3xl:grow-10 lg:order-2 lg:mt-16 mb-16 lg:mb-0 mx-4.5 lg:mx-21 font-serif font-light text-5xl lg:text-9xl 3xl:text-10xl text-white break-words duration-150 {isTitleLineHeightIncreased ? 'leading-none lg:leading-none' : 'leading-compact lg:leading-compact'}">{@html title}</h1>
        <div class="grow-10 3xl:grow-26 lg:order-1 flex flex-col lg:flex-row items-stretch lg:items-end mx-5 lg:ml-23 lg:mr-12.25">
            <div class="grow flex flex-col lg:flex-row justify-between items-stretch lg:items-center max-w-full">
                <p class="max-w-full lg:max-w-1/3 leading-snug break-words text-white">{@html description}</p>
                <div class="flex justify-between items-center mt-12 lg:mt-0">
                    <a
                        class="
                            flex pr-1 lg:pr-0 min-w-12 min-h-12 lg:justify-end items-center text-xl text-white duration-150 hover:opacity-70 active:translate-y-px active:duration-0
                            {nextUrl ? '' : 'pointer-events-none opacity-30'}
                        "
                        tabindex={nextUrl ? '0' : '-1'}
                        href={nextUrl}
                    >{nextText}</a>
                    <div class="hidden lg:block grow lg:grow-0 mx-4 lg:w-26.5 h-0.5 bg-white"></div>
                    <a
                        class="
                            flex pl-1 lg:pl-0 min-w-12 min-h-12 justify-end lg:justify-start items-center text-xl text-white duration-150 hover:opacity-70 active:translate-y-px active:duration-0
                            {prevUrl ? '' : 'pointer-events-none opacity-30'}
                        "
                        tabindex={prevUrl ? '0' : '-1'}
                        href={prevUrl}
                    >{prevText}</a>
                </div>
            </div>
        </div>
        <div class="grow order-3 flex justify-between items-center mt-7 lg:mt-24 mb-3 lg:mb-0 ml-1.5 lg:ml-16.75 lg:mr-3">
            <Socials
                links={socials}
                isLight={true}
            />
            <!-- Dots -->
            <div class="flex flex-wrap items-center justify-center">
                {#each images as image, i (i)}
                    {@const isActive = i === slideActive}
                    <button
                        class="
                            flex justify-center items-center lg:mx-8 w-12 h-12 duration-150 hover:opacity-60 active:scale-90
                            {isActive ? 'pointer-events-none opacity-100' : 'opacity-30'}
                        "
                        type="button"
                        aria-label="{dotText} {i + 1}"
                        disabled={isActive}
                        tabindex={isActive ? '-1' : null}
                        on:click={() => goTo(i)}
                    >
                        <span class="w-2 h-2 bg-white rounded-full"></span>
                    </button>
                {/each}
            </div>
        </div>
    </div>
    <div class="absolute w-full h-full overflow-hidden">
        <!-- Images -->
        {#each images as image, i (i)}
            <Img
                isVisible={i === slideActive}
                src={image}
                width=1152
                height=1536
                alt={title}
                classes='absolute w-full h-full object-cover duration-1000 will-change-transform'
                classesVisible='z-10'
                classesInvisible='opacity-0 scale-110'
            />
        {/each}
    </div>
</div>