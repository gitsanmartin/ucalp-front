<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	const career = data.career;
</script>

<TitlePage title={'editar carrera'} />

<div class="grid justify-items-center">
	<div class="stats stats-vertical shadow">
		<div class="stat">
			<div class="stat-title">ID - carrera</div>
			<div class="stat-value text-primary">{career.id}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Nombre de la carrera</div>
			<div class="stat-value text-secondary">{career.nameCareer}</div>
		</div>

		<div class="stat">
			<form method="POST" action="?/delete" enctype="multipart/form-data" class="text-center">
				<a href="/careers">
					<button class="btn btn-outline btn-info">Cancelar</button>
				</a>
				<button class="btn btn-outline btn-error">Eliminar</button>
			</form>
		</div>
	</div>
</div>
