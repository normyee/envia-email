//ixpedofwvuldrpzd senha do app
const nodemailer = require("nodemailer");
const banner = require("./banner.js");
const prompt = require("prompt");

let entrada1 = {
    properties: {
        email: {
            description: "Seu E-mail",
            required: true,
            type: "string"
        },
        senha: {
            required: true
        },
        remetente: {
            description: "Nome do remetente",
            required: true,
            type: "string"
    } 
  }
};
let entrada2 = {
    properties: {
        assunto: {
            description: "Assunto",
            required: true,
            type: "string"
        },
        quantidade: {
            description: "quantidade de mensagens",
            required: true,
            type: "number"
        },
        destinatario: {
            description: "destinatário",
            required: true,
            type: "string"
        },
        html: {
            description: "Conteúdo do E-mail",
            required: true,
            type: "string"
        },
        texto: {
            description: "Texto caso não renderize o HTML",
            type: "string"
        }
    }
}

let [smtp, tls, porta, remeteConc] = ["", false, 0, ""];

banner();

prompt.message = "";
prompt.delimiter = ":";
prompt.colors = false;
prompt.start();

const prompts = (schema) => new Promise((resolve, reject) => {
prompt.get(schema, (erro, conteudos) => {
    if (erro) reject(new Error("Erro no input!"));
    resolve(conteudos);
});
});

console.log("Escolha seu E-mail de preferência, senha (senha de app se for o serviço da Google), e remetente");
prompts(entrada1)
.then(contents => {
    const resultado = contents;
    const regExp = /[gmail.com]/
if (regExp.test(resultado.email) === true) {
    smtp = "smtp.gmail.com";
    tls = true;
    porta = 465;
} if (regExp.test(resultado.email) !== true) {
    smtp = "smtp.office365.com";
    tls = false;
    porta = 587;
};
    const envia = nodemailer.createTransport({
        host: smtp,
        port: porta,
        secure: tls,
        auth: {
            user: resultado.email,
            pass: resultado.senha,
        }
    });
console.log("Quantidade de mensagens, assunto, texto opcinal e conteúdo do E-mail, e *destinatário (OBS: separar por vírgula)");
prompts(entrada2)
.then(contents2 => {
    const resultado2 = contents2;

    remeteConc = resultado.remetente.concat(` <${resultado.email}>`);

for (let quantia = 0; quantia < resultado2.quantidade; quantia++) {

    envia.sendMail({
        from: remeteConc,
        to: resultado2.destinatario,
        subject: resultado2.assunto,
        html: resultado2.html,
        text: resultado2.texto
    })
        .then(() => console.log("Email enviado com sucesso!"))
        .catch((falha) => console.log("Erro no envio do E-mail", falha));
};
});

})
.catch(erro => console.log("Houve um erro. Cheque se houve algum erro na digitação dos valores", erro));