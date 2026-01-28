import { IncomingMessageEventMap } from "http";
import { repositoryPodcast } from "../repositories/podcast-repository";
// If FilterPodcastModel is a default export, use:

// If it's a named export, ensure it is exported as 'FilterPodcastModel' in the model file.
import { StatusCode } from "../utils/status-code";
import { PodcastTransferModel } from "../models/podcast-trans-fer-model";



export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
   // definir a Interface de resposta
   let responseFormat: PodcastTransferModel = {
      statusCode: 0,
        body: [],
   }
   
   //buscar os episódios filtrados
    const queryString = (podcastName || '').split('?p=')[1] || '';//obtém o valor do parâmetro p da query string
    const data = await repositoryPodcast(queryString); // lógica para filtrar episódios de podcast por nome

    //verificar se encontrou episódios
     responseFormat.statusCode = 
       data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    
    responseFormat.body = data;
  
    return responseFormat;

}
