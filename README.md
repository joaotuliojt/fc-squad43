# FCallendar - Squad 43
Projeto desenvolvido para o Hackathon do Programa de Formação da [FCamara](https://www.fcamara.com.br/) que foi realizado entre 01/09/21 e 16/09/21.

## 💻 Sobre o projeto
O FCallendar é uma aplicação WEB criada para ajudar com a volta do modelo híbrido de trabalho.

<p> A aplicação serve para qualquer consultor ou os famosos #SangueLaranja da empresa, possam fazer um agendamento para irem e trabalharem no escritório respeitando o limite para não causar aglomeração </p>

## 🎨Layout

### Desktop

#### Login 
<img src="/github/tela_login.png"/>

#### Inicial 
<img src="/github/tela_inicial.png"/>

#### Reserva 
<img src="/github/tela_reserva.png"/>

#### Modal 
<img src="/github/tela_modal_desktop.png"/>

### Agenda
<img src="/github/tela_agenda.png"/>


### Mobile (Layout Completo)

<img src="/github/all_images.png" />

---

## Como executar o projeto

💡 Para tudo funcionar normalmente o back-end tem que estar rodando!!

---

### Pré requisito

Antes de começar você terá que instalar as seguintes ferramentas em sua máquina:

- [NodeJs](https://nodejs.org/pt-br/)
- [MySql](https://www.mysql.com)
- [Git](https://git-scm.com) (Para clonar o repositório)

Além disto é bom ter um bom editor de código como o [VsCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Projeto 
```
# Clone este repositório
$ git clone

# Acesse a pasta do projeto no terminal do seu PC
("Exemplo")
cd nome_da_pasta

# Digitar no terminal(Para baixar todas as dependencias do projeto).
$ npm i

# Algumas informações importantes!!
A aplicação FCallendar não registra consultores, pois, se trata de um agendamento exclusivo para os consultores no qual utilizam um email corporativo.

Para poder ter uma melhor experiência utilize um usuário padrão registrado no banco de dados:
Emai: teste@fcamara.com | Senha: 13850

# Preparando MySql
Para a aplicação funcionar você terá que criar um novo schema no MySql, aconselhamos usar o MySQL Workbench para isso

# Configurando banco de dados no código.
Vá para o arquivo configData.js e insira as informações

DB_SCHEMA = (Nome do seu Schema do MySql)
DB_USERNAME = (Seu usuário, por padrão deixamos 'root')
DB_PASSWORD = (Senha do seu Banco de Dados)


# Agora é só rodar!! No terminal na pasta do projeto digite:
$ node index.js

# Para ver a em seu navegador insira na url a porta 8080
$ http://localhost:8080

```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### Front-End:

- HTML
- CSS
- JavaScript
- EJS

### Back-end:

- NodeJs
- Sequelize
- Express
- MySql

### Utilitários:

- <a href="https://www.figma.com">FIGMA</a> → <a href="https://www.figma.com/file/"> FCallendar - Squad43 </a>
- <a href="https://trello.com"> Trello </a>
- <a href="https://miro.com/app/=/"> Miro </a>
- <a href="https://www.behance.net/gallery/126887807/FCALLENDAR"> Behance </a>

## 👨‍💻 Protagonistas

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/maressa-gonzales-05a15b92/"><img style="border-radius: 50%;" src="/github/Maressa.png" width="100px;" alt=""/><br /><sub><b>Maressa Gonzales</b></sub></a><br /><a href="https://www.linkedin.com/in/maressa-gonzales-05a15b92/" title="Maressa Gonzales"> </a></td>
    <td align="center"><a href="https://www.linkedin.com/in/jtsoares/"><img style="border-radius: 50%;" src="/github/João.png" width="100px;" alt=""/><br /><sub><b>João Túlio</b></sub></a><br /><a href="https://www.linkedin.com/in/jtsoares/" title="João Túlio"></a></td>
    <td align="center"><a href="https://www.linkedin.com/in/anac-rocha/"><img style="border-radius: 50%;" src="/github/Ana.png" width="110px;" alt=""/><br /><sub><b>Ana Carolina</b></sub></a><br /><a href="https://www.linkedin.com/in/anac-rocha/" title="Carol"></a>  <a href="https://www.linkedin.com/in/anac-rocha/"</a></td> 
    <td align="center"><a href="https://www.linkedin.com/in/igor-da-silva-medeiros/"><img style="border-radius: 50%;" src="/github/Igor.png" width="90px;" alt=""/><br /><sub><b>Igor da Silva</b></sub></a><br /><a href="https://www.linkedin.com/in/igor-da-silva-medeiros/" title="Igor perfil"></a></td>
  </tr>
</table>
