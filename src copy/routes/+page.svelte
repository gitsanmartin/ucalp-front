<script>
	import TitlePage from '$lib/components/TitlePage.svelte';
	export let data;

	const isValid = data.isValid;
	let lista = {};
	let bandera = false;
	function addTd() {
		return !bandera;
	}
	const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
	function formatTime(time) {
		const date = new Date(time);
		const formated = {
			hour: date.getHours(),
			min: date.getMinutes()
		};
		return formated;
	}

	data.schedules.items.forEach((elem) => {
		const classNumber = elem?.['@expand']?.classroom.classroomNumber;
		const starTime = formatTime(elem.starTime).hour;

		if (!lista[classNumber]) {
			lista[classNumber] = [];
			lista[classNumber].subjectList = [];
			lista[classNumber].scheduleList = [];
		}

		if (!lista[classNumber].scheduleList[starTime]) {
			lista[classNumber].scheduleList[starTime] = [];
		}

		lista[classNumber].subjectList.push({
			dia: elem.day,
			startTime: formatTime(elem.starTime).hour,
			endTime: formatTime(elem.endTime).hour,
			subject: elem?.['@expand']?.subject.nameSubject
		});

		// if (!lista[classNumber].scheduleList.includes(formatTime(elem.starTime).hour)) {
		// 	lista[classNumber].scheduleList.push(formatTime(elem.starTime).hour)
		// }

		lista[classNumber].scheduleList[starTime].push({
			dia: elem.day,
			startTime: formatTime(elem.starTime).hour,
			endTime: formatTime(elem.endTime).hour,
			subject: elem?.['@expand']?.subject.nameSubject,
			scheduleId: elem?.id
		});
	});

	// console.log(data);
	// console.log(lista);
	// console.log('lista de horarios: ', scheduleList)
</script>

<TitlePage title={'horarios'} />

<!-- <div>
	{#each Object.entries(lista) as [key, value]}
		<div>
			<div> tabla :{key} </div>
			{#each Object.entries(value.scheduleList) as [keyA, valueA]}
				<div>
					{keyA}
					{#each valueA as item}
						<div>{item.dia} - {item.subject}</div>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div> -->

<div class="divider mt-5" />

{#each Object.entries(lista) as [key, value]}
	<div class="overflow-x-auto">
		<div>
			<h1 class="text-xl font-bold mb-3">
				Aula N° {key}
				{#if isValid}
					<a href="new">
						<button class="btn btn-sm btn-success">Agregar nuevo</button>
					</a>
				{/if}
			</h1>
			<!-- <span ></span>Aula N° {key}  -->
		</div>
		<table class="table w-full">
			<thead>
				<tr>
					<th>Horario</th>
					<th class="text-center">Lunes</th>
					<th class="text-center">Martes</th>
					<th class="text-center">Miercoles</th>
					<th class="text-center">Jueves</th>
					<th class="text-center">Viernes</th>
				</tr>
			</thead>
			<tbody>
				{#each Object.entries(value.scheduleList) as [horario, valueA]}
					<tr>
						<!-- kkk -->
						<th>{horario}:00</th>
						{#each dias as dia}
							<td>
								{#each valueA as item, idx}
									{#if dia === item.dia}
										<!-- {idx}: {item.dia} -->
										<div class="text-center">
											<div class="text-xl font-bold">
												<a href="/delete/{item.scheduleId}">
													{item.subject}
												</a>
											</div>
											<div class="text-secondary">{item.endTime}:00 hs</div>
											<!-- <div class="text-secondary">{item.scheduleId}</div> -->
										</div>
										<!-- <div class="text-center">
										{item.subject}
									</div>
									<div class="text-center">
										[{item.endTime}hs]
									</div> -->
									{/if}
								{/each}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="divider" />
{/each}
