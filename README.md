# node-freelancer-aluno-restfull-api
Esse projeto é uma API RESTful que utiliza do MongoDB hospedado pelo [mLab](https://mlab.com/).  Essa está implantada com [Heroku](https://www.heroku.com/) que encontra-se disponível no link: https://freelancer-aluno.herokuapp.com/, onde devem ser acessadas liberadas para obter os JSON.
A RESTful API com Node Express foi desenvolvida para alimentar a aplicação [Freelancer-Aluno desenvolvida em Angular 6](https://skatesham.github.io/freelancer-aluno).

A API RESTful satisfaz todas as rotas necessárias para a aplicação angular 6.

## Rotas
As rotas da api envolvem GET, POST, PUT, DELETE em uma rotas do [servidor](https://freelancer-aluno.herokuapp.com/)... As rotas bases são:

1. `/login` Essa rota reponde a POST com corpo `{email, senha}`
2. `/usuarios` Autenticada por Token
3. `/pedidos` Autenticada por Token
4. `/propostas` Autenticada por Token
5. `/tags` Autenticada por Token

Um  usuario pode ser criado através de um POST em `/usuarios` com um corpo de `{nick, email, senha, tel}`

#### Exemplo de cadastro
Request: `POST`  
Rota: [/usuario](https://freelancer-aluno.herokuapp.com/usuarios)  
```
{
	"nick": "Shazan",
	"email": "sham.vinicius@gmail.com",
	"senha": "supersenha",
	"tel": "12996657941"
}
```
  
Pode tambem ser realizado por `curl`, dessa maneira:
```
curl -d "nick=usuario&email=jhon@gmail.com&senha=strong&tel=12987654321" -X POST https://freelancer-aluno.herokuapp.com/usuarios
```

## Modelo Banco de dados
Em breve..

## Para desenvolvimento
Crie um arquivo `.env` com:
```
MONGODB = 'mongodb://localhost/freelancer'
JWT_SECRET = 'secret';
```
