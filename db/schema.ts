import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from "uuid";

export const meals = sqliteTable("meals", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  title: text("title").notNull().unique(),
  slug: text("slug").notNull().unique(),
  image: text("image").notNull(),
  summary: text("summary").notNull(),
  instructions: text("instructions").notNull(),
  creator: text("creator").notNull(),
  creator_email: text("creator_email").notNull(),
  created_at: text("created_at").$defaultFn(() => new Date().toISOString()),
});
