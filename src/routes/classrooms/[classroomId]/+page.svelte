<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	const classroom = data.classroom;
</script>

<TitlePage title={'editar aula'} />

<div class="grid justify-items-center">
	<div class="stats stats-vertical shadow">
		<div class="stat">
			<div class="stat-title">ID</div>
			<div class="stat-value text-primary">{classroom.id}</div>
		</div>

		<div class="stat">
			<div class="stat-title">NúmNúmero de aula</div>
			<div class="stat-value text-secondary">{classroom.classroomNumber}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Descripción</div>
			<div class="stat-value">{classroom.description}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Capacidad</div>
			<div class="stat-value">{classroom.capacity}</div>
		</div>

		<div class="stat">
			<form method="POST" action="?/delete" enctype="multipart/form-data" class="text-center">
				<a href="/classrooms">
					<button class="btn btn-outline btn-info">Cancelar</button>
				</a>
				<button class="btn btn-outline btn-error">Eliminar</button>
			</form>
		</div>
	</div>
</div>
