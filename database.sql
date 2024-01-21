CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(100) NOT NULL,
	"completed" boolean DEFAULT FALSE
);

INSERT INTO tasks ("name", "completed")
VALUES 
('Buy groceries', FALSE),
('Pay electric bill', FALSE),
('Feed the cats', FALSE);

UPDATE "task" SET "completed" = TRUE WHERE "id" = 1;

SELECT * FROM "tasks";

DROP TABLE "tasks";