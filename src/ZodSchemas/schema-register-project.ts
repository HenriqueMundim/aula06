import { z } from "zod";

export const schemaRegisterProject = z.object({
    title: z.string(),
    description: z.string().max(200)
})


export type FormProject = z.infer<typeof schemaRegisterProject>
