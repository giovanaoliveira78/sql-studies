```sql

CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
)

INSERT INTO students (name) VALUES ('Stefan Salvatore');
INSERT INTO students (name) VALUES ('Elena Gilbert');
INSERT INTO students (name) VALUES ('Caroline Forbes');
INSERT INTO students (name) VALUES ('Bonnie Bennet');
INSERT INTO students (name) VALUES ('Damon Salvatore');
INSERT INTO students (name) VALUES ('Niklaus Mikaelson');
INSERT INTO students (name) VALUES ('Jeremy Gilbert');
INSERT INTO students (name) VALUES ('Katherine Pierce');
INSERT INTO students (name) VALUES ('Matt Donovan');
INSERT INTO students (name) VALUES ('Elijah Mikaelson');


CREATE TABLE courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
)

INSERT INTO courses (name) VALUES ('HTML');
INSERT INTO courses (name) VALUES ('CSS');
INSERT INTO courses (name) VALUES ('Javascript');
INSERT INTO courses (name) VALUES ('Typescript');
INSERT INTO courses (name) VALUES ('React');
INSERT INTO courses (name) VALUES ('Node.js');
INSERT INTO courses (name) VALUES ('Git');
INSERT INTO courses (name) VALUES ('Github');
INSERT INTO courses (name) VALUES ('Express.js');
INSERT INTO courses (name) VALUES ('Banco de dados');