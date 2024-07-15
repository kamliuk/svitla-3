<script>
    import Img from './img.svelte';

    export let images;
    export let id;
    export let title;
    export let url;
    export let ref;
    export let button;
</script>
<div class="lg:flex flex-row-reverse grow mt-9 lg:mt-44 mb-5 lg:mb-20.5 mx-5 lg:mx-18.75">
    <div class="flex flex-col justify-end mb-8 lg:mb-32">
        <div class="flex flex-col lg:flex-col-reverse justify-between lg:justify-center items-center min-h-92/100">
            <h2 class="max-w-full lg:text-vertical-rl font-bold text-stone-700 text-xl lg:text-1.5sm text-center lg:text-left break-words">{title}</h2>
            <div class="lg:block my-2 lg:my-15 w-4.5 lg:w-0.5 h-0.5 lg:h-32.25 bg-stone-700"></div>
            <div class="max-w-full lg:text-vertical-rl font-semibold lg:font-bold text-stone-700 text-sm lg:text-1.5sm text-center lg:text-left break-words">{ref} {id}</div>
        </div>
    </div>
    <div class="flex flex-col grow">
        <div class="flex justify-end items-end grow-2 lg:mr-16.75">
            <div class="flex lg:flex-col justify-center lg:justify-end items-end grow w-full lg:w-auto lg:h-full">
                <div class="relative flex grow w-0 lg:w-auto lg:h-0 max-w-75 lg:max-w-full max-h-full lg:max-h-100 aspect-3/4 overflow-hidden bg-neutral-400">
                    <Img
                        isVisible={true}
                        src={images[0]}
                        width=300
                        height=400
                        alt={title}
                        classes='absolute top-0 left-0 w-full h-full object-cover duration-1000'
                        classesVisible=''
                        classesInvisible='opacity-0 scale-110'
                    />
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-stretch lg:items-end grow mt-9.5">
            <div class="flex lg:flex-col justify-center lg:justify-end items-start grow w-full lg:w-auto lg:h-full">
                <div class="relative flex grow w-0 lg:w-auto lg:h-0 max-w-62.25 lg:max-w-full lg:max-h-83 aspect-3/4 overflow-hidden bg-neutral-400">
                    <Img
                        isVisible={true}
                        src={images[1]}
                        width=249
                        height=332
                        alt={title}
                        classes='absolute top-0 left-0 w-full h-full object-cover duration-1000'
                        classesVisible=''
                        classesInvisible='opacity-0 scale-110'
                    />
                </div>
            </div>
            <a
                class="flex justify-center items-center border-2 border-stone-700 mt-9.5 lg:mt-0 px-10 py-5 lg:min-w-68 min-h-18.75 text-center font-extrabold text-1.5sm leading-5.5 text-stone-900 lg:translate-x-5 duration-150 active:translate-y-px active:duration-0 hover:bg-white"
                href={url}
                target="_blank"
            >{button}</a>
        </div>
    </div>
</div>