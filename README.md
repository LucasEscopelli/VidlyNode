# API RESTful para uma locadora de filmes!
## Tópico 1: Como utilizar a API localmente?
#### 1°: Deve-se dar uma `git clone` no repositório, através do comando via terminal `git clone https://github.com/LucasEscopelli/VidlyNode.git`!
#### 2°: No terminal da pasta principal do repositório, deve-se dar o comando `npm i` para instalar todos os pacotes externos que foram utilizados no projeto, que serão comentados mais a frente nesta página.
#### 3°: Agora, basta utilizar todos os métodos que forem desejados para testar ou até mesmo utilizar na sua aplicação!
#### 4°: Para facilitar a utilização e compreensão das rotas criadas nesse projeto, deixo aqui o link para importar dentro do Postman: https://api.postman.com/collections/24297672-27c92bc4-3969-48ed-994d-b732a3bf5520?access_key=PMAT-01GW0Y3KGCVY0KHHYK3A11WXVB

## Tópico 2: Tecnologias utilizadas dentro da aplicação.
#### 1°  Node.js: Software (runtime) que utiliza javascript para rodar fora do navegador por meio do motor V8 da Google e mais performático devido à sua arquitetura assíncrona e orientada a eventos (Event Loop). Por fazer uso de javaScript, essa foi a linguagem em que a API foi desenvolvida.
#### 2° Express: Um pacote instalado por meio do npm (Node Package Manager) com intuido de facilitar as rotas da API e o uso de middlewares.
#### 3° MongoDB: Banco de dados não-relacional e orientado a documentos. Como o nome já indica, os dados são salvos em documentos BSON ao invés de tabelas relacionadas, como em qualquer SQL. A tecnologia foi escolhida para estudo do banco de dados devido ao meu interesse por um banco de dados que pudesse ser flexível com seus dados, ter um alto potencial de escabilidade e bom desempenho.
#### 4° Mongoose: Mongoose é um pacote externo também instalado por meio do npm, que objetifica facilitar o código para comunicação com o banco de dados não-relacional MongoDB.
#### 5° Joi: Um pacote utilizado para a validação dos dados inseridos por meio de schemas. O mesmo facilita a leitura das validações implementadas pelo código e oferece validações que a biblioteca do mongoose é incapaz de fornecer. A mesma foi escolhida para uma maior consistência dos dados inseridos dentro da nossa aplicação.


