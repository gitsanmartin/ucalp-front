<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let form;
	export let data;
</script>

<h1>Crear nueva carrera</h1>
<TitlePage title={'nueva carrera'} />

<div class="max-w-sm mx-auto">
	<form method="POST" action="?/create" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="nameCareer" class="label font-medium pb-1">
				<span class="label-text">Nombre de la carrera</span>
			</label>
			<input
				type="text"
				name="nameCareer"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.nameCareer ?? ''}
			/>
		</div>

		<input type="hidden" name="user" value={data?.profile?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md"> Agregar nueva carrera</button>
		</div>
	</form>
</div>
