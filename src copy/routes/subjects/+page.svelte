<script>
	import SubjectListItem from '$lib/components/SubjectListItem.svelte';
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	export let subjects;
	const isValid = data.isValid;
</script>

<TitlePage title={'materias'} />

{#if isValid}
	<a href="subjects/new">
		<button class="btn btn-primary">crear nueva materia</button>
	</a>
{/if}

<div class="overflow-x-auto mt-5">
	<table class="table table-zebra w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>#</th>
				<th>ID</th>
				<th>Materia</th>
				<th>Duración</th>
				<th>Año</th>
				<th>Profesor</th>
				<th>Carrera</th>
				{#if isValid}
					<th>Acción</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each data.subjects as subject, index}
				<SubjectListItem {subject} {index} {isValid} />
			{/each}
		</tbody>
	</table>
</div>
