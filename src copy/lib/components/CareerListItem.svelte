<script>
	export let career;
	export let idx;
	export let isValid;
	const date = new Date(career.created);
</script>

<!-- row -->
<tr>
	<th>{idx + 1}</th>
	<th>{career.id}</th>
	<td>{career.nameCareer}</td>
	<td> aca mostrar la lista de materias </td>

	{#if isValid}
		<td>
			<a href="careers/{career.id}"><button class="btn btn-xs btn-primary btn-info">ver</button></a>
			<a href="careers/{career.id}/edit"
				><button class="btn btn-xs btn-primary btn-success">edit button</button></a
			>
		</td>
	{/if}
</tr>
