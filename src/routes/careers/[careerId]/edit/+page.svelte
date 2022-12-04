<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	let career = data.career;
</script>

<TitlePage title={`editar carrera`} />
<div class="max-w-sm mx-auto">
	<form method="POST" action="?/update" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="nameCareer" class="label font-medium pb-1">
				<span class="label-text">Nombre de la carrera</span>
			</label>
			<input
				type="text"
				name="nameCareer"
				class="input input-bordered w-full max-w-md mb-2"
				value={career?.nameCareer ?? ''}
			/>
		</div>

		<input type="hidden" name="user" value={career?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md">Actualizar</button>
		</div>
	</form>
</div>
