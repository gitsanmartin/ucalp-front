<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let form;
	export let data;
	let classroom = data.classroom;
</script>

<TitlePage title={`editar aula ${classroom.classroomNumber}`} />

<div class="max-w-sm mx-auto">
	<form method="POST" action="?/update" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="classroomNumber" class="label font-medium pb-1">
				<span class="label-text">Número de aula</span>
			</label>
			<input
				type="number"
				name="classroomNumber"
				class="input input-bordered w-full max-w-md mb-2"
				value={classroom.classroomNumber ?? ''}
			/>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="description" class="label font-medium pb-1">
				<span class="label-text">Descripción</span>
			</label>
			<input
				type="text"
				name="description"
				class="input input-bordered w-full max-w-md mb-2"
				value={classroom.description ?? ''}
			/>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="capacity" class="label font-medium pb-1">
				<span class="label-text">Capacidad</span>
			</label>
			<input
				type="number"
				name="capacity"
				class="input input-bordered w-full max-w-md mb-2"
				value={classroom.capacity ?? ''}
			/>
		</div>

		<input type="hidden" name="user" value={classroom?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md">Actualizar</button>
		</div>
	</form>
</div>
