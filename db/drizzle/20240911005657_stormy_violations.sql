DROP TABLE `users`;--> statement-breakpoint
DROP INDEX IF EXISTS `meals_title_unique`;--> statement-breakpoint
ALTER TABLE `meals` ADD `slug` text NOT NULL;--> statement-breakpoint
ALTER TABLE `meals` ADD `text` text NOT NULL;--> statement-breakpoint
ALTER TABLE `meals` ADD `summery` text NOT NULL;--> statement-breakpoint
ALTER TABLE `meals` ADD `instructions` text NOT NULL;--> statement-breakpoint
ALTER TABLE `meals` ADD `creator` text NOT NULL;--> statement-breakpoint
ALTER TABLE `meals` ADD `create_email` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `meals_slug_unique` ON `meals` (`slug`);--> statement-breakpoint
ALTER TABLE `meals` DROP COLUMN `title`;--> statement-breakpoint
ALTER TABLE `meals` DROP COLUMN `recipy`;