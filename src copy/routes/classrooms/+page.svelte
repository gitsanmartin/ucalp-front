<script>
	import ClassroomListItem from '$lib/components/ClassroomListItem.svelte';
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	const classrooms = data.classrooms.items;
	const isValid = data.isValid;
</script>

<TitlePage title={'aulas'} />

{#if isValid}
	<a href="classrooms/new">
		<button class="btn btn-primary">crear nueva aula</button>
	</a>
{/if}

<div class="overflow-x-auto mt-5">
	<table class="table table-zebra w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>#</th>
				<th>ID</th>
				<th>Número de aula</th>
				<th>descripción</th>
				<th>capacidad</th>
				{#if isValid}
					<th>Acción</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each classrooms as classroom, idx}
				<ClassroomListItem {classroom} {idx} {isValid} />
			{/each}
		</tbody>
	</table>
</div>
