CREATE TABLE IF NOT EXISTS "meals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"image" text NOT NULL,
	"summary" text NOT NULL,
	"instructions" text NOT NULL,
	"creator" text NOT NULL,
	"creator_email" text NOT NULL,
	"created_at" text,
	CONSTRAINT "meals_title_unique" UNIQUE("title"),
	CONSTRAINT "meals_slug_unique" UNIQUE("slug")
);
