ALTER TABLE `meals` ADD `title` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `meals_title_unique` ON `meals` (`title`);