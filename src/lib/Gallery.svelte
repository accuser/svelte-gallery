<script lang="ts">
	import ChevronLeftIcon from './ChevronLeftIcon.svelte';
	import ChevronRightIcon from './ChevronRightIcon.svelte';
	import Image from './Image.svelte';

	let klass: string = '';

	export { klass as class };

	export let items: { alt: string; caption?: string; src: string }[];

	$: curr = 0;
	$: item = items[curr];

	$: prev = curr > 0 ? curr - 1 : items.length - 1;
	$: next = curr < items.length - 1 ? curr + 1 : 0;
</script>

<div>
	<div class="relative">
		<span
			class="absolute left-0 top-0 bottom-0 z-10 flex items-center text-white opacity-50 hover:opacity-75"
			class:prev={prev !== curr}
			on:click={() => (curr = prev)}
		>
			<ChevronLeftIcon class="h-24 stroke-1" />
		</span>
		{#key curr}
			<div>
				<Image class={klass} {...item} />
			</div>
		{/key}
		<span
			class="absolute top-0 right-0 bottom-0 flex items-center z-10 text-white opacity-50 hover:opacity-75"
			class:next={next !== curr}
			on:click={() => (curr = next)}
		>
			<ChevronRightIcon class="h-24 stroke-1" />
		</span>
	</div>
	<div class="mt-2 md:mt-4 flex items-center justify-start gap-2 md:gap-4">
		{#each items as { alt, src }, index}
			<img
				{alt}
				{src}
				class="h-8 w-8 md:h-16 md:w-16 object-cover opacity-75 hover:opacity-100"
				on:click={() => (curr = index)}
			/>
		{/each}
	</div>
</div>
