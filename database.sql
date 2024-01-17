CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(255),
	"completed" boolean
);

INSERT INTO tasks ("name", "completed")
VALUES 
('Buy groceries', FALSE),
('Pay electric bill', TRUE),
('Feed the cats', FALSE);
