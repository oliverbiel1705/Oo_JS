function Diznome (nome) {
    this.nome = nome
}

function Idade (data) {
        // Data cliente
    var idade = data;
    var idade = idade.split('/');
    for (i=0; i<idade.length; i++) {
        idade[i] = parseInt(idade[i])
    }
    const diaCliente = idade [0];
    const mesCliente = idade [1];
    const anoCliente = idade [2];

        // Data Atual
    var today = new Date();
    today = today.toLocaleDateString();
    today = today.split('/');
    for (i=0; i<today.length; i++) {
        today[i] = parseInt(today[i])
    }
    const diaToday = today [0];
    const mesToday = today [1];
    const anoToday = today [2];

        // calcula idade
    var aniversario = anoToday - anoCliente
    if(mesToday < mesCliente) {
        aniversario = aniversario -1
    }

    if(mesToday === mesCliente){
        if(diaToday > diaCliente){
            aniversario = aniversario - 1
        }
    }
    this.idade = aniversario
}



function ClienteBasico (nome, data) {
    Cliente.call(this, nome, data)
    this.tipo = "Cliente básico"
    this.desconto = "0% de desconto"
}

function ClientePremium (nome,data) {
    Cliente.call(this,nome, data)
    this.tipo = "Cliente premium"
    this.desconto = "15% de desconto"
}



function Cliente (nome, data, tipo) {
    Diznome.call(this, nome)
    Idade.call(this, data)
}

const cliente1 = new Cliente ("Bruno", "06/03/2004");
const cliente2 = new ClienteBasico ("Pedro", "20/10/2003");
const cliente3 = new ClientePremium ("Ruan", "15/04/2012");

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);