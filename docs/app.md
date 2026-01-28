# Podecast Manager

 ### Descrição
 Um app estílo netflix, aonde eu possa centralizar diferentes episodíos podcast separados por categoria


 ### Domínio
 Podcast feitos em vídeo

 ### Features
  - Lista os podcast em secões de categorias
   - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
 Lista episódios podcasts em sessões de categorias

 ### Como vou implementar:
  Vou retornar em uma api rest(json) o nome do podcast,nome do episódio, imagem de capa e link,category
 
  ```js
  [
   {
      podcastName: "Flow",
      episode: "LUIZ SAYÃO - Flow #.524",
      videoId:"ZmWeZJzK4rw"
      cover:"https://i.ytimg.com/vi/ZmWeZJzK4rw/hqdefault.jpg" ,
      link:"https://www.youtube.com/live/ZmWeZJzK4rw?si=_F80UVAIDAIq790V",
      categorys:["religioso","policial"]
      
   },
   {
      podcastName: "Flow",
      episode: "SARGENTO NANTES + SARGENTO CASTRO - Flow #.516",
      videoId:"EAToC_4MecM"
      cover: "https://i.ytimg.com/vi/EAToC_4MecM/hq720.jpg",
      link:"https://www.youtube.com/live/EAToC_4MecM?si=bUevaqrnRDljn1wB",
      categorys:["religioso","policial"]
      
   }

  ]
  
   GET:retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast 