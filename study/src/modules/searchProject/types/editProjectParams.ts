import type z from "zod";
import type { editProjectParamsSchema } from "../schemas/editProjectParams";

export type EditProjectParams = z.infer<typeof editProjectParamsSchema>