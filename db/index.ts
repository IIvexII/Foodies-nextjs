import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { config } from "dotenv";
import { meals } from "./schema";

config({ path: ".env" }); // or .env

export const db = drizzle(sql, { schema: { meals } });
