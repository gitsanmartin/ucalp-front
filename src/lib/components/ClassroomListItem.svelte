<script>
	export let classroom;
	export let idx;
	export let isValid;
</script>

<!-- row -->
<tr>
	<th>{idx + 1}</th>
	<th>{classroom.id}</th>
	<td>{classroom.classroomNumber}</td>
	<td>{classroom.description}</td>
	<td>{classroom.capacity}</td>
	{#if isValid}
		<td>
			<a href="classrooms/{classroom.id}"
				><button class="btn btn-xs btn-primary btn-info">ver</button></a
			>
			<a href="classrooms/{classroom.id}/edit"
				><button class="btn btn-xs btn-primary btn-success">edit button</button></a
			>
		</td>
	{/if}
</tr>
