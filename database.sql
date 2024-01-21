CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80),
	"description" varchar(255),
	"completed" boolean DEFAULT false
);

INSERT INTO tasks ("name", "description", "completed")
VALUES 
('Buy groceries', 'broccoli and carrots', FALSE),
('Pay electric bill', 'cost is $130 this month', FALSE),
('Feed the cats', 'the good kind of food', FALSE);

UPDATE "task" SET "completed" = TRUE WHERE "id" = 1;

SELECT * FROM "tasks";

DROP TABLE "tasks";