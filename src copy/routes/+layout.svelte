<script>
	import '../app.postcss';
	export let data;
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">ucalp</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/professors">profesores</a>
			</li>
			<li>
				<a href="/subjects">materias</a>
			</li>
			<li>
				<a href="/careers">careras</a>
			</li>
			<li>
				<a href="/classrooms">aulas</a>
			</li>
			{#if data?.profile}
				<li>
					<form action="/logout" method="POST">
						<button>Logout</button>
					</form>
				</li>
			{:else}
				<li>
					<a href="/login">Login</a>
				</li>
				<li>
					<a href="/register">Register</a>
				</li>
			{/if}
		</ul>
	</div>
</div>

<!-- <div>
	<ul>
		{#if data?.profile}
			<li>
				<form action="/logout" method="POST">
					<button>Logout</button>
				</form>
			</li>
		{:else}
			<li><a href="/login">Login</a></li>
			<li><a href="/register">Register</a></li>
			<form action="/logout" method="POST">
				<button>Logout</button>
			</form>
		{/if}
	</ul>
	<a href="/">
		Ir al home
	</a>
	<a href="/professors">
		Ir a profesores
	</a> -->
<!-- <div>
		{#if data?.profile}
			<form action="/logout" method="POST">
				<button>Logout</button>
			</form>
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		{/if}
	</div> -->
<!-- </div> -->

<slot />
