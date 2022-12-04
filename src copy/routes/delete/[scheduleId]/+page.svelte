<script>
	import TitlePage from '$lib/components/TitlePage.svelte'
	export let data
	const schedule = data.schedule
</script>

<TitlePage title={'Horario'} />

<div class="grid justify-items-center">
	<div class="stats stats-vertical shadow">
		<!-- <div class="stat">
			<div class="stat-title">ID</div>
			<div class="stat-value text-primary">{schedule.id}</div>
		</div> -->

		<div class="stat">
			<div class="stat-title">Materia</div>
			<div class="stat-value text-primary">
				{schedule?.['@expand']?.subject.nameSubject}
			</div>
		</div>

		<div class="stat">
			<div class="stat-title">Aula</div>
			<div class="stat-value text-secondary">
				{schedule?.['@expand']?.classroom.classroomNumber}
			</div>
		</div>

		<div class="stat">
			<div class="stat-title">Día</div>
			<div class="stat-value text-secondary">
				{schedule?.day}
			</div>
		</div>

		<div class="stat">
			<div class="stat-title">Horario</div>
			<div class="stat-value text-secondary">
				{schedule?.startHour}:00 - {schedule?.endHour}:00
			</div>
		</div>

		<div class="stat">
			<form method="POST" action="?/delete" enctype="multipart/form-data" class="text-center">
				<a href="/">
					<button class="btn btn-outline btn-info">Cancelar</button>
				</a>
				<button class="btn btn-outline btn-error">Eliminar</button>
			</form>
		</div>
	</div>
</div>