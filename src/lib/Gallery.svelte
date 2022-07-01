<script lang="ts">
	export let items: { alt: string; caption?: string; src: string }[];
	export let wrap: boolean = false;

	$: curr = 0;
	$: item = items[curr];

	$: prev = curr > 0 ? curr - 1 : wrap ? items.length - 1 : curr;
	$: next = curr < items.length - 1 ? curr + 1 : wrap ? 0 : curr;
</script>

<div
	class="aspect-w-16 aspect-h-9 w-full bg-cover bg-center "
	style="background-image: url({item.src});"
>
	<div class="flex flex-row items-center justify-between">
		<span on:click={() => (curr = prev)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class:prev={prev !== curr}
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
		</span>
		<span on:click={() => (curr = next)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class:next={next !== curr}
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
		</span>
	</div>
</div>
<p class="my-4 truncate">{item.caption}</p>
<div class="flex gap-4">
	{#each items as { alt, src }, index}
		<img {alt} {src} on:click={() => (curr = index)} />
	{/each}
</div>

<style lang="postcss">
	img {
		@apply h-20 w-20 object-cover opacity-75 hover:opacity-100;
	}

	span {
		@apply text-white opacity-50 transition-opacity hover:opacity-75;
	}

	svg {
		@apply hidden h-24;

		&.next,
		&.prev {
			@apply block;
		}
	}
</style>
