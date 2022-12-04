<script>
	// export let data
	export let subject;
	export let index;
	export let isValid;
</script>

<!-- row 1 -->
<tr>
	<th>{index + 1}</th>
	<th>{subject.id}</th>
	<td>{subject.nameSubject}</td>
	<td>{subject.duration}</td>
	<td>{subject.year}</td>
	<td>
		<!-- {#each subject.professors as professor}
			{professor.firstName}
		{/each} -->
		{#if subject?.['@expand']?.professor}
			{subject?.['@expand']?.professor.lastName},
			{subject?.['@expand']?.professor.firstName}
		{:else}
			Sin asignar
		{/if}
	</td>
	<td>
		<!-- {#each subject.professors as professor}
			{professor.firstName}
		{/each} -->
		{#if subject?.['@expand']?.career}
			{subject?.['@expand']?.career.nameCareer}
		{:else}
			Sin asignar
		{/if}
	</td>
	{#if isValid}
		<td>
			<a href="subjects/{subject.id}"
				><button class="btn btn-xs btn-primary btn-info">ver</button></a
			>
			<a href="subjects/{subject.id}/edit"
				><button class="btn btn-xs btn-primary btn-success">edit button</button></a
			>
		</td>
	{/if}
	<!-- {isValid?`<td>edit button {isValid}</td>`:``} -->
</tr>
