# Atividade-Email-Scrap
📰 Scraper de Últimas Notícias do G1 + Email
Projeto da disciplina Análise e Projeto de Sistemas.

📌 O que ele faz?
Realiza scraping das últimas notícias publicadas no site G1.

Envia automaticamente um e-mail com um resumo formatado dessas notícias.

🛠️ Tecnologias usadas
Node.js

Axios

Cheerio

Nodemailer

dotenv
⚙️ Como usar
Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git  
cd seu-repositorio  

Crie um arquivo .env com as seguintes variáveis:
EMAIL_HOST=smtp.gmail.com  
EMAIL_PORT=465  
EMAIL_USER=seuemail@gmail.com  
EMAIL_PASS=sua_senha_ou_app_password  

Instale as dependências:
npm install  

Execute o projeto:
node index.js 
