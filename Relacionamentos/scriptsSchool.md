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


-- 1:1 (um para um): Um aluno possui um endereço, e um endereço pertence a um aluno

CREATE TABLE students_address (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER UNIQUE NOT NULL,
  street TEXT NOT NULL,
  city TEXT NOT NULL,

  FOREIGN KEY (student_id) REFERENCES students(id)
)

INSERT INTO students_address (student_id, street, city) VALUES (
  '1', 
  'Joana da Silva', 
  'Belo Horizonte'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '2', 
  'Tenente João da Costa', 
  'Salvador'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '3', 
  'Maranhão Ribeiro', 
  'Santo Amaro'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '4', 
  'Gralha Azul', 
  'Aracaju'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '5', 
  'Amanda de Araujo Silva', 
  'Maceió'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '6', 
  'Neusa Aparecida Silva', 
  'Guarujá'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '7', 
  'João da Silva Duarte', 
  'Campinas'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '8', 
  'João Pedro Rios', 
  'Guarulhos'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '9', 
  'Amara de Jesus Saldanha', 
  'Betim'
  )
  INSERT INTO students_address (student_id, street, city) VALUES (
  '10', 
  'Maria Tereza de Jesus', 
  'Joinville'
  )


  -- Inner Join
SELECT a.id, a.student_id, s.name, a.street, a.city
FROM students_address AS a
INNER JOIN students AS s ON s.id = a.student_id


-- 1:N - Um para muitos, UM curso tem MUITOS módulos

CREATE TABLE course_modules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  course_id INTEGER NOT NULL,

  FOREIGN KEY (course_id) REFERENCES courses(id)
)