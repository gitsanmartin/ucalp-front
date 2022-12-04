<!-- <form method="POST" action="?/register">
	<div>
		<label>nombre: </label>
		<input type="text" name="name" />
	</div>
	<div>
		<label>email: </label>
		<input type="email" name="email" />
	</div>
	<div>
		<label>password: </label>
		<input type="password" name="password" />
	</div>
	<div>
		<label>confirm password: </label>
		<input type="password" name="passwordConfirm" />
	</div>
	<button>Register</button>
</form> -->

<div class="card max-w-md bg-base-100 shadow-xl mx-auto">
	<div class="card-body">
		<h2 class="card-title">Nuevo Registro</h2>
		<form method="POST" action="?/register">
			<label class="input-group my-2 grid grid-cols-3">
				<span>Nombre</span>
				<input
					name="name"
					type="text"
					class="input input-bordered input-primary w-full max-w-xs col-span-2"
				/>
			</label>
			<label class="input-group my-2 grid grid-cols-3">
				<span>Email</span>
				<input
					name="email"
					type="email"
					class="input input-bordered input-primary w-full max-w-xs col-span-2"
				/>
			</label>
			<label class="input-group my-2 grid grid-cols-3">
				<span>Password</span>
				<input
					name="password"
					type="password"
					class="input input-bordered input-primary w-full max-w-xs col-span-2"
				/>
			</label>
			<label for="passwordConfirm" class="input-group my-2 grid grid-cols-3">
				<span>Re-password</span>
				<input
					name="passwordConfirm"
					type="password"
					class="input input-bordered input-primary w-full max-w-xs col-span-2"
				/>
			</label>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Registrar</button>
			</div>
		</form>
	</div>
</div>
