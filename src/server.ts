import* as http from 'http';//código de servidor http
import { app } from './app';



const server =  http.createServer(app);//cria o servidor http

const port = process.env.PORT //porta do servidor || 3000;//define a porta do servidor
 

server.listen(port, () => {//porta do servidor
    console.log(`Sevidor rodando na porta ${port}`);//mensagem de confirmação
    
});