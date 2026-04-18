# 🚀 API Podcast

## 🎧 Sobre
API em TypeScript para listar e filtrar episódios de podcast usando o módulo `http` do Node.js.

## ✨ Funcionalidades
- 📃 Listar todos os episódios disponíveis
- 🔎 Filtrar episódios por nome via query string
- 🌐 Responder em JSON

## 🛠️ Tecnologias
- 🟦 TypeScript
- 🟢 Node.js
- ⚙️ HTTP nativo

## 📍 Rotas

### `GET /api/episodes`
Retorna a lista completa de episódios.

Status esperado:
- `200 OK` quando houver episódios
- `204 No Content` quando a lista estiver vazia

Exemplo de resposta:

```json
[
	{
		"podcastName": "Flow",
		"episode": "LUIZ SAYÃO - Flow #.524",
		"videoId": "ZmWeZJzK4rw",
		"categorys": ["religioso", "policial"]
	}
]
```

### `GET /api/episode?p=nome`
Filtra os episódios pelo termo enviado na query string `p`.

Status esperado:
- `200 OK` quando houver episódios filtrados
- `204 No Content` quando não houver correspondência

Exemplo:

```bash
http://localhost:3000/api/episode?p=flow
```

Exemplo de resposta:

```json
{
	"statusCode": 200,
	"body": [
		{
			"podcastName": "Flow",
			"episode": "LUIZ SAYÃO - Flow #.524",
			"videoId": "ZmWeZJzK4rw",
			"categorys": ["religioso", "policial"]
		}
	]
}
```

## ⚠️ Formato atual das respostas
- A rota `GET /api/episodes` retorna apenas o array de episódios.
- A rota `GET /api/episode?p=...` retorna um objeto com `statusCode` e `body`.
- Se quiser, posso padronizar as duas respostas para ficarem no mesmo formato.

## ▶️ Como executar
1. 📦 Instale as dependências
```bash
npm install
```

2. 🏃 Execute em desenvolvimento
```bash
npm run start:dev
```

3. 🌍 Acesse a API
```bash
http://localhost:3000/api/episodes
```

## 🧪 Scripts disponíveis
- `npm run start:dev` - inicia a aplicação em modo desenvolvimento
- `npm run start:watch` - inicia com observação de arquivos
- `npm run dist` - gera a build em `dist`
- `npm run start:dist` - executa a build gerada

## 📌 Observação
O servidor sobe por padrão na porta `3000`, ou usa o valor definido em `PORT`.