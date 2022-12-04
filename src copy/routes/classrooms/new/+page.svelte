<script>
	export let form;
	export let data;
	import TitlePage from '$lib/components/TitlePage.svelte';
</script>

<TitlePage title={'nueva aula'} />

<div class="max-w-sm mx-auto">
	<form method="POST" action="?/create" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="classroomNumber" class="label font-medium pb-1">
				<span class="label-text">Número de aula</span>
			</label>
			<input
				type="number"
				name="classroomNumber"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.classroomNumber ?? ''}
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
				value={form?.data?.description ?? ''}
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
				value={form?.data?.capacity ?? ''}
			/>
		</div>

		<input type="hidden" name="user" value={data?.profile?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md"> Agregar nueva aula</button>
		</div>
	</form>
</div>