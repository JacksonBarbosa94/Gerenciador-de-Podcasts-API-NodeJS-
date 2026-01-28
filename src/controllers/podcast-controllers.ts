import { IncomingMessage, ServerResponse } from 'http';
import {servicelistEpisodes} from '../services/list-episodes-services'; 
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { ContentType } from '../utils/content-type';

// Make sure the file exists at the correct path and is named 'podcast-transfer-model.ts'
import { PodcastTransferModel } from '../models/podcast-trans-fer-model';

export const getListEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse) => {
    const content: PodcastTransferModel = await servicelistEpisodes();
    
    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    res.write(JSON.stringify(content.body));
    
    res.end();  
};


// função para filtrar episódios de podcast por nome
export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse) => {

      //obtém a query string da URL

      const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);//exemplo de nome de podcast
         res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
          res.end(JSON.stringify(content));
         
    }