<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let form;
	export let data;
	// console.log(data)
</script>

<TitlePage title={'editar materia'} />

<div class="max-w-sm mx-auto">
	<form method="POST" action="?/update" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="nameSubject" class="label font-medium pb-1">
				<span class="label-text">Nombre de materia</span>
			</label>
			<input
				type="text"
				name="nameSubject"
				class="input input-bordered w-full max-w-md mb-2"
				value={data?.subject?.nameSubject ?? ''}
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
				value={data?.subject?.duration ?? ''}
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
				value={data?.subject?.year ?? ''}
			/>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="professor" class="label font-medium pb-1">
				<span class="label-text">profesor de la materia</span>
			</label>
			<select name="professor" class="select select-primary w-full max-w-xs">
				<option disabled selected>----</option>
				{#each data.professors.items as professor}
					{#if professor.id === data.subject.professor}
						<option value={professor.id} selected
							>{professor.firstName}, {professor.lastName}</option
						>
					{:else}
						<option value={professor.id}>{professor.firstName}, {professor.lastName}</option>
					{/if}
				{/each}
			</select>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="career" class="label font-medium pb-1">
				<span class="label-text">carrera</span>
			</label>
			<select name="career" class="select select-primary w-full max-w-xs">
				<option disabled selected>----</option>
				{#each data.careers.items as career}
					{#if career.id === data.subject.career}
						<option value={career.id} selected>{career.nameCareer}</option>
					{:else}
						<option value={career.id}>{career.nameCareer}</option>
					{/if}
				{/each}
			</select>
		</div>

		<input type="hidden" name="user" value={data?.profile?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md">Actualizar</button>
		</div>
	</form>
</div>
