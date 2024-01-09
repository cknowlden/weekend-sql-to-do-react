CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(255),
	"completed" varchar(1)
);

INSERT INTO tasks ("name", "completed")
VALUES 
('Buy groceries', 'N'),
('Pay electric bill', 'Y'),
('Feed the cats', 'Y');
