# [Movie List](https://movies-catalogs.netlify.app) 🎬

## Objetivo
Desenvolver uma aplicação web utilizando Angular para criar um catálogo de filmes interativo e visualmente atraente, permitindo a exploração de informações detalhadas sobre diferentes filmes.

## Descrição do Projeto

O Movie List é uma aplicação web que permite aos usuários pesquisar, visualizar e interagir com uma vasta biblioteca de filmes. A aplicação exibe informações como título, sinopse, data de lançamento, avaliações e ainda permite que os usuários pesquisem e adicionem filmes a uma lista de favoritos, além de deixar seus comentarios sobre os filmes. O design é responsivo, garantindo uma experiência fluida em todos os dispositivos.

## Instruções de Como Executar a Aplicação

### Pré-requisitos

- Node.js instalado na máquina
- Angular CLI instalado (`npm install -g @angular/cli`)
- Um navegador web moderno (Chrome, Firefox, Edge, Opera)

### Passos para execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/username/weather-app.git
2. **Navegue até o diretório do projeto:**
   ```bash
    cd movie-catalog
3. **Instale as Dependencias:**
   ```bash
   npm install
   ng add @angular/material
   ng add @fortawesome/angular-fontawesome@<version>
  - Para o Angular Material escolha um tema ao ser solicitado (por exemplo, "Indigo/Pink").
  - Confirme a instalação das animações do Angular.
  - A versão do font awesome você pode ver em [Version](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)
  - Para saber a versão do Angular basta digitar `ng version`
    
4. **Pegue a ApiKey:**

   Insira sua chave API cadastrada no [The Movie Database (TMDb)](https://www.themoviedb.org).
5. **Colar Chaves e atualizar o TypeScript:**

   - Cole as chaves na pasta `src/app/environments/environment.example.ts` e `src/app/environments/environment.prod.example.ts`. 
   - Em `apiKey`, cole a chave da **The Movie Database**. 
   
6. **Executar a pagina web:**

   Digite `ng serve` no terminal e abra o endereço fornecido (exemplo: `http://localhost:4200`).
7. **Casos de ERRO:**

   - Verifique se a chave API está correta e se a conexão com a API do TMDb está funcionando.
## Tecnologias Utilizadas

- Angular: Framework para construir aplicações web de forma modular.
- Font Awesome: Biblioteca de ícones para adicionar elementos visuais atraentes à aplicação.
- Angular Material: Biblioteca de componentes que oferece uma interface de usuário moderna e responsiva.
- API de Filmes (TMDb): Para obter dados sobre filmes em tempo real.
- Node.js: Para o ambiente de execução do JavaScript no servidor.
- Git: Controle de versão do código.

## Possíveis Melhorias Futuras

- Adição de Recursos de Busca Avançada: Implementar filtros para pesquisa por gênero ou data de lançamento.
- Autenticação de Usuário: Adicionar login e registro para personalização da experiência do usuário.
- Melhorar sistema de comentários: Permitir que os usuários compartilhem comentários públicos e mantenham comentários privados sobre os filmes.
- Melhorias na Responsividade: Aperfeiçoar a visualização em dispositivos móveis.
- Informações Adicionais: Incluir trailers dos filmes e mais detalhes como elenco e equipe de produção.
- Dark Mode: Implementar um tema escuro para melhor usabilidade em ambientes de pouca luz.
- Filme sorteado: Adicionar um sistema para recomendar um filme aleatório toda semana aos usuários.
- Paginator: Adicionar um Paginator para o usuario navegar entre as páginas de filmes 

# [PREVIEW WEBSITE](https://movies-catalogs.netlify.app)

## Resultados

### Home Page
![image](https://github.com/user-attachments/assets/cdde3928-749f-41d1-88ed-1eaccb777a40)

![image](https://github.com/user-attachments/assets/0273e7f0-da9f-4b7e-af0d-90401acc2434)

![image](https://github.com/user-attachments/assets/bbb16fa7-9a8a-46e9-8f41-66e6e578cb0b)

### Favorites 
![image](https://github.com/user-attachments/assets/112bd51c-678f-4193-bab6-561759f65008)

![image](https://github.com/user-attachments/assets/32198a5a-c630-4ff2-b779-0750473c19f7)

### Details
![image](https://github.com/user-attachments/assets/2fc91f09-3397-4956-8d32-adebe78a0189)

![image](https://github.com/user-attachments/assets/9fc870bb-5b90-43f7-a1d4-5ce6cc646507)

### Caixa de Comentarios
![image](https://github.com/user-attachments/assets/543a5089-f442-44ef-9cd5-0fde76d460f7)

### Responsividade
![image](https://github.com/user-attachments/assets/4ed9ec02-9fe1-4938-a515-9ca7484e9432)

![image](https://github.com/user-attachments/assets/d5913a28-bc95-43fd-9c4a-68860dbb77ba)











