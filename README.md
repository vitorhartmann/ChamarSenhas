# ChamarSenhas
 Projeto utilizado para chamar senhas de 01-99, com efeito sonoro, para simular display de LED, utilizado em diversos locais
 
 


# Funcionamento


<H3> Configuração </H3>
--------------------------------------------------------------------------------------------------------------------------------
### Alterar o IP da máquina dos seguintes arquivos:

# Na pasta client

client>src>pages>DisplayTerminal>index.js
client>src>pages>PasswordTerminal>index.js
client>src>pages>ServiceTerminal>index.js

Substituir pelo IP da máquina que será utilizada para hospedar localmente o web service.
Trocar
const socket = io('192.168.16.100:8080', { transports: ['websocket'] })
por
const socket = io('XXX.XXX.XX.XXX:8080', { transports: ['websocket'] })


# Na pasta server
server>server.js

Substituir pelo IP da máquina que será utilizada para hospedar localmente o web service.
Trocar
const SERVER_HOST = '192.168.16.100';
por
const SERVER_HOST = 'XXX.XXX.XX.XXX';

--------------------------------------------------------------------------------------------------------------------------------
<H3> Instalação </H3>

### Na pasta principal inicial:

- Abrir o arquivo "Instalar pacotes"
- Aguardar finalização dos downloads
- Abrir o arquivo "Iniciar Aplicação"



--------------------------------------------------------------------------------------------------------------------------------

# Tecnologias utilizadas

- [Socket.IO](https://socket.io/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Koa](https://devdocs.io/koa/)
- [Styled-Components](https://styled-components.com/)
- [ReactJS](https://pt-br.reactjs.org/)