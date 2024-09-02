import { z } from "zod";

const zodUserValidationSchema=z.object({
    password:z.string({invalid_type_error:'password must be string'}).min(4,{message:'password minimum 4 charc'}).max(20,{message:'password maxmum 20 charc'}).optional(),
})

export default zodUserValidationSchema;