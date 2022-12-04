<div class="card max-w-sm bg-base-100 shadow-xl mx-auto">
	<!-- <figure>
		<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
	</figure> -->
	<div class="card-body">
		<h2 class="card-title">Inicio de sesión</h2>
		<form method="POST" action="?/login">
			<label class="input-group my-2 grid grid-cols-3">
				<span>email</span>
				<input
					name="email"
					type="email"
					class="input input-bordered input-primary w-full max-w-xs col-span-2"
				/>
			</label>
			<!-- <div>
				<label>email</label>
				<input type="email" name="email">
			</div> -->
			<label class="input-group my-2 grid grid-cols-3">
				<span>Password</span>
				<input
					name="password"
					type="password"
					class="input input-bordered input-primary w-full max-w-xs col-span-2"
				/>
			</label>
			<!-- <div>
				<label>password</label>
				<input type="password" name="password">
			</div> -->
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Login</button>
			</div>
		</form>
	</div>
</div>