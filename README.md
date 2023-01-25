Esse repositorio foi criado pra ajudar converter uma query insert que tem diversas colunas para uma query update.

A necessidade desse script surgiu quando estava trabalhando com um banco local que é um espelho do banco em produção, e em alguns momentos o banco local estava faltando algumas informações. Utilizando o DBeaver eu conseguia fazer uma copia avançada em SQL de um registro que trazia um INSERT como cópia, porém se aquele registro já existisse na tabela que eu iria colar o valor iria ser duplicado, fazendo assim a necessidade de converter essa query para um UPDATE. 
