<script>
	import ProfessorListItem from '$lib/components/ProfessorListItem.svelte';
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	export let professor;
	const isValid = data.isValid;
</script>

<TitlePage title={'profesores'} />

{#if isValid}
	<a href="professors/new">
		<button class="btn btn-primary">crear nuevo profesor</button>
	</a>
{/if}

<div class="overflow-x-auto mt-5">
	<table class="table table-zebra w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>#</th>
				<th>ID</th>
				<th>Nombre</th>
				<th>apellido</th>
				<th>Color</th>
				{#if isValid}
					<th>Acción</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each data.professors.items as professor, index}
				<ProfessorListItem {professor} {index} {isValid} />
			{/each}
		</tbody>
	</table>
</div>