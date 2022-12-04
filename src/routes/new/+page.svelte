<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let form;
	export let data;
	// console.log(data)
</script>

<TitlePage title={'nuevo horario'} />

<div class="max-w-md mx-auto">
	<form method="POST" action="?/create" enctype="multipart/form-data">
		<div class="form-control w-full max-w-md">
			<label for="classroom" class="label font-medium pb-1">
				<span class="label-text">Número de aula</span>
			</label>
			<select name="classroom" class="select select-primary w-full max-w-md">
				<option disabled selected>----</option>
				{#each data.classrooms.items as classroom}
					<option value={classroom.id}>{classroom.classroomNumber}</option>
				{/each}
			</select>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="subject" class="label font-medium pb-1">
				<span class="label-text">Seleccionar la materia</span>
			</label>
			<select name="subject" class="select select-primary w-full max-w-md">
				<option disabled selected>----</option>
				{#each data.subjects.items as subject}
					<option value={subject.id}>{subject.nameSubject}</option>
				{/each}
			</select>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="day" class="label font-medium pb-1">
				<span class="label-text">elegir el dia</span>
			</label>
			<select name="day" class="select select-primary w-full max-w-md">
				<option disabled selected>----</option>
				<option value="lunes">Lunes</option>
				<option value="martes">Martes</option>
				<option value="miercoles">Miércoles</option>
				<option value="jueves">Jueves</option>
				<option value="viernes">Viernes</option>
			</select>
		</div>

		<div class="form-control w-full max-w-md">
			<label for="startHour" class="label font-medium pb-1">
				<span class="label-text">elegir hora de entrada</span>
			</label>
			<input type="text" name="startHour" class="input input-bordered w-full max-w-md mb-2" />
		</div>

		<div class="form-control w-full max-w-md">
			<label for="endHour" class="label font-medium pb-1">
				<span class="label-text">elegir hora de salida</span>
			</label>
			<input type="text" name="endHour" class="input input-bordered w-full max-w-md mb-2" />
		</div>

		<input type="hidden" name="user" value={data?.profile?.id} />
		<div class="w-full max-w-md pt-3">
			<button class="btn btn-primary w-full max-w-md"> Agregar nueva aula</button>
		</div>
	</form>
</div>
