<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	const professor = data.professor;
</script>

<TitlePage title={'materia'} />

<div class="grid justify-items-center">
	<div class="stats stats-vertical shadow">
		<div class="stat">
			<div class="stat-title">ID</div>
			<div class="stat-value text-primary">{professor.id}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Nombre</div>
			<div class="stat-value text-secondary">{professor.firstName}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Apellido</div>
			<div class="stat-value">{professor.lastName}</div>
		</div>

		<div class="stat">
			<form method="POST" action="?/delete" enctype="multipart/form-data" class="text-center">
				<a href="/professors">
					<button class="btn btn-outline btn-info">Cancelar</button>
				</a>
				<button class="btn btn-outline btn-error">Eliminar</button>
			</form>
		</div>
	</div>
</div>
