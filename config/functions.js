//Função para melhorar a exibição da resposta da requisição
function response(sts,msg,aftrows,data = null){
    return{
        status:sts,
        message:msg,
        affected__rows:aftrows,
        data:data,
        timestamp:new Date().getTime()
    }

}

module.exports = {response}