import * as fs from 'fs';//importa o módulo de sistema de arquivos
import * as path from 'path';//importa o módulo de caminho
import {  podcastModel } from '../models/podcastModel';//importa o modelo de podcast





const  pathData = path.resolve(__dirname, '..', 'repositories', 'podcast.json');//caminho do arquivo de dados

export const repositoryPodcast = async (podcastName?:string) => {//função para obter todos os podcasts

    const language = "utf-8" ;//define a linguagem padrão como utf-8
    const rawdata =  fs.readFileSync(pathData, language);//lê o arquivo de dados
    let jsonFile = JSON.parse(rawdata);//analisa o arquivo JSON
     
    if(podcastName){
        jsonFile = jsonFile.filter((podcast:podcastModel) => podcast.podcastName === podcastName);//filtra os podcasts pelo nome
    }
    
    if(podcastName){
        jsonFile = jsonFile.filter((podcast:podcastModel) => podcast.podcastName === podcastName);//filtra os podcasts pelo nome
    }



    return jsonFile;//retorna os dados do podcast


}