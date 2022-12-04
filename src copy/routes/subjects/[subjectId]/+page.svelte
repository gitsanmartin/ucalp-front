<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	const subject = data.subject;
</script>

<TitlePage title={'editar materia'} />

<div class="grid justify-items-center">
	<div class="stats stats-vertical shadow">
		<div class="stat">
			<div class="stat-title">ID</div>
			<div class="stat-value text-primary">{subject.id}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Nombre de la materia</div>
			<div class="stat-value text-secondary">{subject.nameSubject}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Duración</div>
			<div class="stat-value">{subject.duration}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Año</div>
			<div class="stat-value">{subject.year}°</div>
		</div>

		<div class="stat">
			<div class="stat-title">Profesor</div>
			{#if subject?.['@expand']?.professor}
				<div class="stat-value">
					{subject?.['@expand']?.professor.lastName}, {subject?.['@expand']?.professor.firstName}
				</div>
			{:else}
				<div class="stat-value">no tiene un profesor assignado</div>
			{/if}
		</div>

		<div class="stat">
			<form method="POST" action="?/delete" enctype="multipart/form-data" class="text-center">
				<a href="/subjects">
					<button class="btn btn-outline btn-info">Cancelar</button>
				</a>
				<button class="btn btn-outline btn-error">Eliminar</button>
			</form>
		</div>
	</div>
</div>
