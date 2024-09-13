import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const meals = pgTable("meals", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull().unique(),
  slug: text("slug").notNull().unique(),
  image: text("image").notNull(),
  summary: text("summary").notNull(),
  instructions: text("instructions").notNull(),
  creator: text("creator").notNull(),
  creator_email: text("creator_email").notNull(),
  created_at: text("created_at").$defaultFn(() => new Date().toISOString()),
});
