<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;
	let professor = data.professor;
</script>

<TitlePage title={'editar profesor'} />

<div class="max-w-sm mx-auto">
	<form method="POST" action="?/update" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="firstName" class="label font-medium pb-1">
				<span class="label-text">Nombre</span>
			</label>
			<input
				type="text"
				name="firstName"
				class="input input-bordered w-full max-w-md mb-2"
				value={professor?.firstName ?? ''}
			/>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="lastName" class="label font-medium pb-1">
				<span class="label-text">Apellido</span>
			</label>
			<input
				type="text"
				name="lastName"
				class="input input-bordered w-full max-w-md mb-2"
				value={professor?.lastName ?? ''}
			/>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="color" class="label font-medium pb-1">
				<span class="label-text">Color</span>
			</label>
			<input
				type="text"
				name="color"
				class="input input-bordered w-full max-w-md mb-2"
				value={professor?.color ?? ''}
			/>
		</div>

		<input type="hidden" name="user" value={professor?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md">Actualizar</button>
		</div>
	</form>
</div>
