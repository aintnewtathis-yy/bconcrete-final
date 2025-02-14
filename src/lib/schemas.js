import { z } from "zod";

export const productFormSchema = z.object({
    model: z.string().optional(),
    color: z.string().optional(),
    name: z.string().min(1, { message: "Имя обязательно" }),
    reachOutWay: z.string().min(1, { message: "Способ связи обязателен" }),
    city: z.string().min(1, { message: "Город обязателен" }),
    addInfo: z.string().optional(),
});
