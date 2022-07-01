<script lang="ts">
	import Gallery from '$lib/Gallery.svelte';

	const items = [
		{
			alt: 'photo frames inside building',
			src: 'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
			caption: 'A photography exhibit, indoors (obviously).'
		},
		{
			alt: 'The ArtScience Museum from the bay in Singapore',
			src: 'https://images.unsplash.com/photo-1655742043955-96ddc29cdfd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80',
			caption: 'The ArtScience Museum from the bay in Singapore'
		},
		{
			alt: 'The Old man of Storr',
			src: 'https://images.unsplash.com/photo-1506368670575-2ecb8dd6d86e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
			caption:
				'It took one day for our company consisting of 6 (tough?) guys to walk from Portree to the Old man of Storr. Our boots where completely soaked. There’s not such a thing like ‘hiking paths’ in Skye. The day after, 4 of the 6 guys went up the hill to see the amazing rock formation!'
		}
	];
</script>

<div class="max-w-screen-md mx-auto flex flex-col justify-center">
	<Gallery {items} />
</div>
