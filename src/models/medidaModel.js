var database = require("../database/config");

function votar(idCarro) {
    instrucaoSql = `INSERT INTO votacao (fkCarro) values (${idCarro});`
    console.log("Executando instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idCarro) {

    instrucaoSql = `select
                    nomeCarro,
                    count(fkCarro)
                    as idVoto
                    FROM Carro
                    JOIN votacao ON fkCarro = idCarro GROUP BY fkCarro ORDER BY fkCarro;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

    
}

function buscarMedidasEmTempoReal(idCarro) {

    instrucaoSql = `select
                    nomeCarro,
                    count(fkCarro)
                    as idVoto
                    FROM Carro
                    JOIN votacao ON fkCarro = idCarro GROUP BY fkCarro ORDER BY fkCarro;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    votar,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
