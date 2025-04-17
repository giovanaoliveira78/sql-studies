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