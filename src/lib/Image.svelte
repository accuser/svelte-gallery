<script lang="ts">
	export let alt: string;
	export let caption: string = alt;
	export let src: string;
	export let srcset: string[] = [];
</script>

<div class="text-black bg-white">
	<figure class="relative">
		<div class="aspect-w-16 aspect-h-9 overflow-clip">
			{#if srcset}
				<picture>
					<source srcset={srcset.join(',')} />
					<img {alt} {src} />
				</picture>
			{:else}
				<img {alt} {src} />
			{/if}
		</div>
		<figcaption><slot name="caption">{caption}</slot></figcaption>
	</figure>
</div>

<style lang="postcss">
	figure {
		@apply bg-inherit;
	}

	figcaption {
		@apply absolute bottom-0 left-0 right-0 bg-inherit opacity-75 px-4 py-2 text-xs sm:text-sm md:text-base truncate;
	}

	img {
		@apply object-cover;
	}
</style>
