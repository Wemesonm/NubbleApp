import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  userName: z.string().regex(userNameRegex, 'username invalido').toLowerCase(),
  fullName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().email('email invalido').toLowerCase(),
  password: z.string().min(8, 'Senha deve ter no minimo 8 caracteres!'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
