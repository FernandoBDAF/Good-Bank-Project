'use server'
 
import { z } from 'zod'
 
const depositSchema = z.object({
  deposit: z.number({
    invalid_type_error: 'Invalid Value',
  }),
})
 
export default async function makeDeposit(formData: FormData) {
  const validatedFields = depositSchema.safeParse({
    deposit: formData.get('deposit'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  
}