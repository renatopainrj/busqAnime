# **BuscAnime 🎥🎌**

Uma aplicação de busca de animes utilizando a API do AniList, construída com **Next.js**, **React** e **TypeScript**.  
O projeto utiliza autenticação OAuth para conectar-se ao AniList e oferece funcionalidades como busca por título ou gênero, além de exibir detalhes sobre os animes encontrados.

---

## **🚀 Instalação e Configuração**

### **📋 Pré-requisitos**

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

### **Clonar o repositório**

```bash
git clone https://github.com/renatopainrj/busqAnime.git
cd busqAnime

````
### **🔧 Instalar dependências**

Com yarn
```bash
yarn install
````
### **Configurar variaveis de ambiente**
Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:
**obs: Para teste local com autenticação do AniList**
**Para criar as variaveis necessarias, é preciso criar conta no [aniList](https://anilist.co/)**

[documentação](https://docs.anilist.co/guide/auth/) para o auxilio para a criação das variaveis 
```.env
NEXT_PUBLIC_CLIENT_ID=SEU_CLIENT_ID_ANILIST
NEXT_PUBLIC_REDIRECT_URI=SEU_REDIRECT_URI
NEXT_PUBLIC_API_URL=https://graphql.anilist.co
````
## **⚙ Executando o projeto**
```bash
yarn run dev
```
Acesse a aplicação em seu navegador: http://localhost:3000

## **⌨️ Teste de estilo de código**
```bash
yarn lint
```

### **🛠️ Construido com**
* [NextJS](https://nextjs.org/docs) - Framework Reac
* [ReactJS](https://react.dev/reference/react) - Biblioteca JavaScript para interfaces
* [Typescript](https://www.typescriptlang.org/) - linguagem de programação fortemente tipada que se baseia em JavaScript
* [CSS Module](https://github.com/css-modules/css-modules) - Estilização isolada
* [AniList](https://docs.anilist.co/guide/introduction) - API de animes usada no projeto

## **Estrutura do projeto**
```
├── components/         # Componentes reutilizáveis da aplicação
├── contexts/           # Gerenciamento de estados globais com Context API
├── pages/              # Páginas do Next.js
│   ├── api/            # Rotas da API (Next.js)
│   ├── index.tsx       # Página inicial
├── public/             # Arquivos estáticos
├── styles/             # Estilos globais e módulos CSS
├── package.json        # Configuração do projeto
└── README.md           # Documentação do projeto
```
## **☎️Endpoints da api**
**Todas as rotas utilizando método: `POST`**

* **Rota** `/api/anilist`
Realiza buscas na API AniList utilizando paginação.

* **Rota** `/api/gender`
Retorna uma lista de gêneros disponíveis.

* **Rota** `/api/animeID`
Realiza buscas na API AniList com o o ID.

* **Rota** `/api/token`
Realiza buscas na API AniList para a utilização da autenticação da API.

## **🛜Hospedagem**
[Netlify](https://www.netlify.com/) - Serviço de hospedagem

Acesse o [BuscAnimes](https://buscanimes.netlify.app/)

## **👀 Obeservações**
A autenticação foi implementada local, para fins de teste.
O arquivo `/src/pages/index.tsx` esta com o configurado para não solicitar a autenticação, para alterar, basta alterar a linha comentada


## **Outros**
Foram utilizados na configuração do projeto
* EsLit
* Prettier
* Husky
* Commitlint
* Lint-staged

