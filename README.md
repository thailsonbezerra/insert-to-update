Esse repositorio foi criado pra ajudar converter uma query insert que tem diversas colunas para uma query update.

A necessidade desse script surgiu quando estava trabalhando com um banco local que é um espelho do banco em produção, e em alguns momentos o banco local estava faltando algumas informações. Utilizando o DBeaver eu conseguia fazer uma copia avançada em SQL de um registro que trazia um INSERT como cópia, porém se aquele registro já existisse na tabela que eu iria colar o valor iria ser duplicado, fazendo assim a necessidade de converter essa query para um UPDATE. 

Para utilizar faça:

1. Para iniciar o desenvolvimento, é necessário clonar o projeto num diretório de sua preferência:
    ```shell
    cd "diretório de sua preferencia"
    git clone https://github.com/thailsonbezerra/insert-to-update.git
    ```
2. Para construir o projeto com o Node é necessário instalar dependências do projeto, execute o comando abaixo:
    ```shell
    npm install
    ```
3. Você precisa renomear o arquivo .env-example para .env e inserir sua query insert na variável **insert**:
    ```shell
    mv .env.example .env
    ```

Obs: As condições necessárias para rodar sem erros: 
1. Em .env o valor da variável precisa está sem quebra de linhas.
2. Os comandos SQL precisam está em maiúsculo, por exemplo `INSERT INTO` e `VALUES`. 
 