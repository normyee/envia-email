# Envia-Email

## Como usar

Para usar a ferramenta "Envia-Email", você precisará escolher um email de preferência (apenas gmail ou serviço de email da microsoft), a senha do email, e se for gmail, é necessário usar a senha de app do gmail. Em seguida, escolha o nome do remetente, assunto do email, quantidade de mensagens, conteúdo do texto em formato HTML, e um texto opcional caso o navegador não renderize o HTML, e o destinatário.

## Como foi programado

Este projeto foi programado utilizando a biblioteca "prompt" para criar a parte interativa do programa, que é executado através do terminal ou cmd. Além disso, utilizei o "nodemailer" para fazer a parte de envios dos emails, utilizando smpt do gmail e da microsoft.

## Dependências
- prompt
- nodemailer

## Instalação

```sh
$ npm install
```

## Execução
Para iniciar e o projeto, utilize os comandos:
```sh
$ git clone https://github.com/usuario/projeto.git
$ cd projeto
$ npm install
$ npm start
```
## Notas
Certifique-se de que a senha do email escolhido é válida e que você tem permissão para usar a conta de email.
Caso esteja usando gmail, é necessário habilitar o acesso de aplicativos menos seguros e gerar uma senha de app.
Certifique-se de que o conteúdo do email está escrito em formato HTML.
Certifique-se de que o destinatário é válido.
