import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config()

const insert = process.env['insert']
console.log(insert)

const tamanho = insert.length;

const inicioColunas = insert.indexOf("(");
const finalColunas = insert.indexOf(")");
const colunas = insert.substring(inicioColunas + 1, finalColunas).split(",");
console.log(colunas.length);

const posicaoFinalValue = insert.indexOf("VALUES") + 6;
const valuesStr = insert.substring(posicaoFinalValue, tamanho).trim();

//console.log(valuesStr)

const finalValores = valuesStr.indexOf(");");

const values = valuesStr.substring(1, finalValores).split(",");
console.log(values.length);

const posicaoTableName = insert.indexOf("INTO");
const tableName = insert.substring(posicaoTableName + 4, inicioColunas).trim();
console.log(tableName);

let update = `UPDATE ${tableName} SET `;

let setValores = "";

for (let i = 0; i < values.length; i++) {
    setValores += `${colunas[i]} = ${values[i]}, `;
}

update = (update + setValores).trim().slice(0, -1);
console.log(update);

fs.writeFileSync('./query-update.txt', update);