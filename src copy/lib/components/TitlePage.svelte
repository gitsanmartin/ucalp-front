<script>
	// @ts-nocheck
	export let title;

	const formatterTitle = (title) => {
		return title.at(0).toUpperCase() + title.slice(1).toLowerCase();
	};
</script>

<!-- class: flex-1  -->
<div class="justify-center md:flex md:justify-start mb-5">
	<span class="text-2xl font-bold mt-5 text-4xl font-extrabold md:text-6xl">
		{formatterTitle(title)}
	</span>
</div>
