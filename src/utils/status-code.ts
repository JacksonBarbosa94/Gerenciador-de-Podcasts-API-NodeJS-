export enum StatusCode {
    CONTINUE = 100, //indica que a requisição foi recebida e o cliente deve continuar a enviar o restante da requisição 
    SWITCHING_PROTOCOLS = 101, //indica que o servidor está mudando para o protocolo especificado pelo cliente
    PROCESSING = 102, //indica que o servidor está processando a requisição, mas ainda não há uma resposta disponível   

    OK = 200,//indica que a requisição foi bem-sucedida
    CREATED = 201,//indica que a requisição foi bem-sucedida e um novo recurso foi criado como resultado    
    ACCEPTED = 202,//indica que a requisição foi aceita para processamento, mas o processamento ainda não foi concluído
    NO_CONTENT = 204,//indica que a requisição foi bem-sucedida, mas não há conteúdo para enviar na resposta
    RESET_CONTENT = 205,//indica que o cliente deve redefinir o documento que enviou a requisição       
    PARTIAL_CONTENT = 206,//indica que o servidor está enviando apenas uma parte do recurso solicitado devido a um cabeçalho de intervalo enviado pelo cliente

    MOVED_PERMANENTLY = 301,//indica que o recurso solicitado foi movido permanentemente para uma nova URL
    FOUND = 302,//indica que o recurso solicitado foi encontrado em uma URL diferente
    NOT_MODIFIED = 304,//indica que o recurso não foi modificado desde a última requisição
    TEMPORARY_REDIRECT = 307,//indica que o recurso solicitado foi temporariamente movido para uma nova URL
    PERMANENT_REDIRECT = 308,//indica que o recurso solicitado foi movido permanentemente para uma nova URL

    BAD_REQUEST = 400,//indica que a requisição do cliente é inválida ou malformada
    UNAUTHORIZED = 401,//indica que a autenticação é necessária para acessar o recurso solicitado
    FORBIDDEN = 403,//indica que o servidor compreende a requisição, mas se recusa a autorizá-la
    NOT_FOUND = 404,//indica que o recurso solicitado não foi encontrado no servidor
    METHOD_NOT_ALLOWED = 405,//indica que o método HTTP usado na requisição não é permitido para o recurso solicitado
    NOT_ACCEPTABLE = 406,//indica que o recurso solicitado não é capaz de gerar uma resposta aceitável pelo cliente 
    REQUEST_TIMEOUT = 408,//indica que o servidor não recebeu uma requisição completa do cliente dentro do tempo limite definido    
    CONFLICT = 409,//indica que a requisição não pôde ser concluída devido a um conflito com o estado atual do recurso
    UNPROCESSABLE_ENTITY = 422,//indica que o servidor entende o tipo de conteúdo da requisição, mas não consegue processar as instruções contidas nela
    TOO_MANY_REQUESTS = 429,//indica que o cliente enviou muitas requisições em um curto período de tempo

    INTERNAL_SERVER_ERROR = 500,//indica que ocorreu um erro interno no servidor ao processar a requisição
    NOT_IMPLEMENTED = 501,//indica que o servidor não suporta a funcionalidade necessária para atender à requisição
    BAD_GATEWAY = 502,//indica que o servidor, ao atuar como gateway ou proxy, recebeu uma resposta inválida do servidor upstream
    SERVICE_UNAVAILABLE = 503,//indica que o servidor está temporariamente indisponível, geralmente devido a manutenção ou sobrecarga
    GATEWAY_TIMEOUT = 504//indica que o servidor, ao atuar como gateway ou proxy, não recebeu uma resposta a tempo do servidor upstream
}