/*
Banco de Dados Relacional

Organiza dados em tabelas estruturadas, com linhas e colunas. E estabelece relacionamentos entre essas tabelas com base em chaves comuns.
*/ 

/*
TABELA

Uma tabela é uma estrutura de armazenamento fundamental em um banco de dados relacional 
Exemplo de tabelas:
       
Colunas 
| Produtos  | Users    | Customers | Categories |
| id        | id       | id        | id         | ==> LINHAS 
| name      | email    | name      | name       |
| price     | password | address   | description|

- Sempre guardar separado dados por assuntos
- Escrever o nome das tabelas no plural
*/

/*
PRIMARY KEY

Primery Key ou Chave Primária, identifica exclusivamente cada registro em uma tabela. A chave primária garante que cada registro seja único dentro da tabela.

- É muito comum tabelas ter identificadores como id
- Quando colocamos uma coluna como chave primária, o próprio banco garante que será um identificador único
*/ 