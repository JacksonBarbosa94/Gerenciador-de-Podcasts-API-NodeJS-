import {  PodcastTransferModel } from "../models/podcast-trans-fer-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const servicelistEpisodes = async (): Promise<PodcastTransferModel> => {
    // defino o contrato de resposta
    let responseFormat: PodcastTransferModel = {
          statusCode: 0,
            body: [],
       }
       
    const data = await repositoryPodcast(); // lógica para listar episódios de podcast

    responseFormat = {
        statusCode:data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    
    
    return responseFormat;
}          