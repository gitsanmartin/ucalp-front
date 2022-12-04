<script>
	// export let data
	export let professor;
	export let index;
	export let isValid;
</script>

<!-- row 1 -->
<tr>
	<th>{index + 1}</th>
	<th>{professor.id}</th>
	<td>{professor.firstName}</td>
	<td>{professor.lastName}</td>
	<td>{professor.color}</td>
	{#if isValid}
		<td>
			<a href="professors/{professor.id}"
				><button class="btn btn-xs btn-primary btn-info">ver</button></a
			>
			<a href="professors/{professor.id}/edit"
				><button class="btn btn-xs btn-primary btn-success">edit button</button></a
			>
		</td>
	{/if}
	<!-- {isValid?`<td>edit button {isValid}</td>`:``} -->
</tr>
<!-- <div class="w-full flex h-28 items-cernter justify-between">
	<div class="flex flex-col w-full">
		<a href="/">Profesor name</a>
		<p>datos del profesor</p>
	</div>
</div> -->
