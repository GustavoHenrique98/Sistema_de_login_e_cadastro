//Função para melhorar a exibição da resposta da requisição
function response(status,message,data){
    return{
        status:status,
        message:message,
        data:data,
        timestamp : new Date().getTime()
    }

}

module.exports = {response}