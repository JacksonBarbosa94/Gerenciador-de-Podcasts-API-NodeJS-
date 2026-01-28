import* as http from 'http';//código de servidor http

import {getListEpisodes,getFilterEpisodes} from './controllers/podcast-controllers';//importa o controlador de podcast
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methodes';


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => { //código do servidor

    //queryString para obter parâmetros da URL
    //http://localhost:3333/api/episode?p=flow
    const baseUrl = (request.url || '').split('?')[0] ?? "";//separa a URL base da query string
    
    

    //rotas do servidor    
    if(request.method ===  HttpMethods.GET && baseUrl === Routes.LIST){//verifica se a requisição é GET e a URL é /podcasts
       await getListEpisodes(request, response);//chama o controlador de podcast
    }
    if(request.method ===  HttpMethods.GET && baseUrl === Routes.EPISODES){//verifica se a requisição é GET e a URL é /podcasts
        await getFilterEpisodes(request, response);//chama o controlador de podcast
     }  
 
};

