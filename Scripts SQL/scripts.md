```sql
-- Cria uma tabela
CREATE TABLE products 

-- Cria as colunas da tabela dentro do ()
CREATE TABLE products (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	price REAL NOT NULL,
	category TEXT NULL DEFAULT 'general'
)


-- Adiciona uma nova coluna a tabela 
ALTER TABLE products ADD quantity INTEGER NOT NULL


-- Remover uma coluna (usa DROP COLUMN)
ALTER TABLE products DROP COLUMN quantity


-- Renomear uma coluna (altera de name para description)
ALTER TABLE products RENAME COLUMN name TO description


-- Voltando pra o nome da coluna para name
ALTER TABLE products RENAME COLUMN description TO name


-- Renomear o nome da tabela
ALTER TABLE products RENAME TO items


-- Voltando o nome da tabela para products
ALTER TABLE items RENAME TO products


-- Como deletar uma tabela
DROP TABLE products 


-- Como inserir dados em uma tabela
INSERT INTO products (name, price) VALUES ('Mouse', 50)
INSERT INTO products (name, price, category) VALUES ('Teclado', 550.50, 'acessory')

-- Seleciona os registros
SELECT * FROM products


-- Entendendo o SEQUENCE (Sequência)
SELECT * FROM sqlite_sequence 


-- Seleciona colunas específicas
SELECT name, price FROM products p 


-- Definindo a ordem ed exibição das colunas
SELECT price, name FROM products p 


-- Atualizar um dado
UPDATE products SET price = 45.90, category = 'general' WHERE id = 1
UPDATE  products SET price = 550.50 WHERE id = 2


-- Inserindo produtos para deletar
INSERT INTO products (name, price, category) VALUES ('Microfone', 500, 'audio');
INSERT INTO products (name, price, category) VALUES ('Webcan', 1200, 'image');
INSERT INTO products (name, price, category) VALUES ('Headset', 800, 'audio');


-- Deletar registros
DELETE FROM products WHERE id = 3


-- Clausula WHERE / o igual busca pelo valor exatamente igual
SELECT * FROM products p WHERE name = 'Mouse'
SELECT * FROM products p WHERE price = 1200


-- Where com LIKE
-- O símbolo de % no começo da palavra, retorna todas as palavras que terminam com cam
SELECT * FROM products WHERE name LIKE '%cam' 
-- O Sìmbolo de % no fim da palavra, retornam todas as palavras que comecem com Web
SELECT * FROM products WHERE name LIKE '%Web' 
-- E se colocar no começo e no fim vai encontrar em qualquer parte, no começo, meio ou fim
SELECT * FROM products WHERE name LIKE '%eb%' 


-- Filtrando valores

--<> sinal de diferente
SELECT * FROM products WHERE price <> 800 -- Seleciona valores diferentes de 800

-- > sinal de maior
SELECT * FROM products WHERE price <> 300 -- Seleciona valores maiores de 300

-- < sinal de menor
SELECT * FROM products WHERE price <> 500 -- Seleciona valores menores de 500

-- <= sinal de menor igual
SELECT * FROM products WHERE price <= 550 -- Seleciona valores menores ou iguais a 550

-- >= Sinal de maior ou igual
SELECT * FROM products WHERE price >= 500 -- Seleciona valores maiores ou iguais a 500


-- Operadores AND e OR
--AND, os dois critérios devem ser atendidos (true)
SELECT * FROM products WHERE price > 500 AND price < 1000 -- Listar os produtos onde o preço seja MAIOR QUE 500 e MENOR que 1000

SELECT * FROM products WHERE price > 500 AND price < 1000 AND ID > 2 -- Listar os produtos onde o preço seja MAIOR QUE 500 e MENOR que 1000 e o id seja MAIOR que 2

--OR, um ou outro critério deve ser atendido, pelo menos um.
SELECT * FROM products WHERE price > 500 OR price < 1000


-- Parenteses
-- Usando AND e OR juntos
SELECT * FROM products WHERE price > 45 AND price < 1000 OR category = 'image' -- Quando usamos o AND e o OR juntos, ele basicamente ignora os AND e retorna as condições dele

SELECT * FROM products WHERE price > 45 AND price < 1000 AND category = 'audio' OR category = 'image'

-- Usando o parenteses
SELECT * FROM products WHERE (price > 45 AND price < 1000) AND (category = 'audio' OR category = 'image') -- Dessa forma a verificação é feita dentro do (), primeiro checa o AND e depois o OR, e não anula um o outro, ambas as varificações são feitas