<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let form;
	export let data;
</script>

<TitlePage title={'crear nuevo profesor'} />

<div class="max-w-sm mx-auto">
	<form method="POST" action="?/create" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="firstName" class="label font-medium pb-1">
				<span class="label-text">Nombre</span>
			</label>
			<input
				type="text"
				name="firstName"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.firstName ?? ''}
			/>
			{#if form?.errors?.firstName}
				{#each form?.errors?.firstName as error}
					<label for="firstName" class="label py-0">
						<div class="label-text-alt text-error">{error}</div>
					</label>
				{/each}
			{/if}
		</div>

		<div class="form-control w-full max-w-md">
			<label for="lastName" class="label font-medium pb-1">
				<span class="label-text">Apellido</span>
			</label>
			<input
				type="text"
				name="lastName"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.lastName ?? ''}
			/>
			{#if form?.errors?.lastName}
				{#each form?.errors?.lastName as error}
					<label for="lastName" class="label py-0">
						<div class="label-text-alt text-error">{error}</div>
					</label>
				{/each}
			{/if}
		</div>

		<div class="form-control w-full max-w-md">
			<label for="color" class="label font-medium pb-1">
				<span class="label-text">Color</span>
			</label>
			<input
				type="text"
				name="color"
				class="input input-bordered w-full max-w-md mb-2"
				value={form?.data?.color ?? ''}
			/>
			{#if form?.errors?.color}
				{#each form?.errors?.color as error}
					<label for="color" class="label py-0">
						<div class="label-text-alt text-error">{error}</div>
					</label>
				{/each}
			{/if}
		</div>

		<input type="hidden" name="user" value={data?.profile?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md">Crear profesor</button>
		</div>
	</form>
</div>
