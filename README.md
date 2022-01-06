# Controle de UsuÃ¡rios

### Tecnologias
- [Java 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Maven](https://maven.apache.org/index.html)
- [Lombok](https://projectlombok.org/)
- [MapStruct](https://mapstruct.org/)
- [H2](https://www.h2database.com/html/main.html)
- [NodeJs v12](https://nodejs.org/en/)
- [ReactJs](https://pt-br.reactjs.org/)
- [MaterialUI](https://mui.com/pt/)

### ConfiguraÃ§Ã£o de ambiente

#### Backend

**Antes de mais nada, instalar o Java 11 e certificar-se que esta Ã© a versÃ£o utilizada local ou globalmente antes da execuÃ§Ã£o dos comandos abaixo.**

- cd ~/.../controle_usuarios/backend/
- mvn clean install
- mvn spring-boot:run

Swagger: http://localhost:9090/api/controleUsuarios/swagger-ui.html

#### Frontend

- cd ~/.../controle_usuarios/frontend/
- npm install
- npm start

A aplicação roda na porta http://localhost:3000

#### Obsercações

O projeto não foi concluido, principalmente o frontend, porém todos serviços da api estão funcionando sendo possível cadastrar, editar, remover e listar todos aquelas entidades que possuírem estas funcionalidades.

Pontos não concluídos:

- Tratamento para mensagens de BadRequest
- Cadastro de usuários no frontend (pela api funciona)
- Validação de dados no frontend
- Ajustes de layout


