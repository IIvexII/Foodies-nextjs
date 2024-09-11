CREATE TABLE `meals` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`recipy` text(255)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `meals_title_unique` ON `meals` (`title`);