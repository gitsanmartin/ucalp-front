<script>
	import CareerListItem from '$lib/components/CareerListItem.svelte';
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	const careers = data.careers.items;
	const isValid = data.isValid;
</script>

<TitlePage title={'carreras'} />

{#if isValid}
	<a href="careers/new">
		<button class="btn btn-primary">crear nueva carrera</button>
	</a>
{/if}
<div class="overflow-x-auto mt-5">
	<table class="table table-zebra w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>#</th>
				<th>ID</th>
				<th>Nombre de la carrera</th>
				<th>creada</th>
				{#if isValid}
					<th>Acción</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each careers as career, idx}
				<CareerListItem {career} {idx} {isValid} />
			{/each}
		</tbody>
	</table>
</div>
