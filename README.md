![Marketspace](https://github.com/user-attachments/assets/123a4778-ad57-456b-b0c8-f6edd97bd1ef)

<p align="center">
  <img alt="Repo size"  src="https://img.shields.io/github/repo-size/geovaneborba/desafio-marketspace?color=4f46e5&style=for-the-badge">
  <img alt="GitHub top language"  src="https://img.shields.io/github/languages/top/geovaneborba/desafio-marketspace?color=4f46e5&style=for-the-badge"> <img alt="GitHub language count"  src="https://img.shields.io/github/languages/count/geovaneborba/desafio-marketspace?color=4f46e5&style=for-the-badge">
</p>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#books-aprendizado">Aprendizado</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#warning-pré-requisitos"> Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="https://github.com/geovaneborba" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre

Marketspace é uma aplicação de anúncios de produtos inspirada no estilo OLX. Com ela, os usuários podem criar e gerenciar anúncios, buscar produtos utilizando filtros avançados, visualizar itens disponíveis e entrar em contato com vendedores diretamente pelo WhatsApp.

### Principais funcionalidades:

- Login e cadastro de usuários.
- Autenticação JWT e Refresh Token.
- Listagem de produtos com busca e filtros.
- Gerenciamento de produtos.
- Envio de múltiplas imagens.
- Visualização de preview antes de criar o anúncio.
- Envio de mensagem via WhatsApp.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :books: Aprendizado

Com a construção desta aplicação eu pude aprimorar ainda mais meus conhecimentos em:

- Autenticação JWT e Refresh Token
- Caching e revalidação
- Estados
- Context API
- Consumo de API com React Query
- Manipulação de imagens
- Upload de múltiplas imagens
- Formulários e Validação
- Navegação com rotas autenticadas com stack e tabs
- Custom Hooks
- Loading e Skeleton UI para proporcionar uma experiência de carregamento mais agradável aos usuários
- Mensagem de Toast para fornecer feedback aos usuários
- Navegação com stack + tabs e envio de parâmetros entre telas

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :rocket: Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- TypeScript
- React Native
- Expo
- React Navigation
- Styled Components
- Axios
- React Hook Form
- Zod
- React Query

Outras dependências e ferramentas utilizadas podem ser encontradas no arquivo package.json

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :warning: Pré-requisitos

Antes de começar, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados em sua maquina. E também você irá precisar de um emulador de dispositivos móveis ou um dispositivo físico para rodar o projeto.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :checkered_flag: Começando

```bash
# Clone os repositórios abaixo
$ git clone https://github.com/geovaneborba/desafio-marketspace.git
$ git clone https://github.com/geovaneborba/desafio-marketspace-api.git

# Entre na pasta e instale as dependências
$ cd desafio-marketspace && yarn install

# Inicie o projeto usando emulador ios
$ npx expo start -c --ios

# Inicie o projeto usando emulador android
$ npx expo start -c --android

# Em outra janela do terminal, entre na pasta da api, instale as dependências e inicie o projeto
$ cd desafio-marketspace-api && npm install && npm run dev

# O aplicativo será iniciado e você receberá informações no terminal sobre o endereço e a porta onde ele estará disponível

```

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

<p align="center">Feito com ❤️ por <a href="https://github.com/geovaneborba" target="_blank">Geovane Borba</a></p>
