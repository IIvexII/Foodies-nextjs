ALTER TABLE `meals` ADD `summary` text NOT NULL;--> statement-breakpoint
ALTER TABLE `meals` ADD `creator_email` text NOT NULL;--> statement-breakpoint
ALTER TABLE `meals` DROP COLUMN `summery`;--> statement-breakpoint
ALTER TABLE `meals` DROP COLUMN `create_email`;