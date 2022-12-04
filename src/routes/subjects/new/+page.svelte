<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let form;
	export let data;
</script>

<TitlePage title={'nueva materia'} />

<div class="max-w-sm mx-auto">
	<form method="POST" action="?/create" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="nameSubject" class="label font-medium pb-1">
				<span class="label-text">Nombre de materia</span>
			</label>
			<input
				type="text"
				name="nameSubject"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.nameSubject ?? ''}
			/>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="duration" class="label font-medium pb-1">
				<span class="label-text">duration</span>
			</label>
			<input
				type="text"
				name="duration"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.duration ?? ''}
			/>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="year" class="label font-medium pb-1">
				<span class="label-text">año</span>
			</label>
			<input
				type="text"
				name="year"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.year ?? ''}
			/>
		</div>

		<input type="hidden" name="user" value={data?.profile?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md">
				{data?.profile?.id} Crear nueva materia</button
			>
		</div>
	</form>
</div>
