import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const createProfessorDto = z.object({
	firstName: z
		.string({ required_error: 'el nombre es obligatorio' })
		.min(1, { message: 'al menos un caracter' })
		.max(40, { message: '40 caracteres como maximo' })
		.trim(),
	lastName: z
		.string({ required_error: 'el apellido es obligatorio' })
		.min(1, { message: 'al menos un caracter para el apellido' })
		.max(40, { message: '40 caracteres como maximo' })
		.trim(),
	color: z
		.string({ required_error: 'se requiere un color' })
		.min(1, { message: 'al menos un caracter para el color' })
		.max(20, { message: '20 caracteres como maximo' })
		.trim()
});
