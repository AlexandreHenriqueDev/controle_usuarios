# Controle de Usuários

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

### Configuração de ambiente

#### Backend

**Antes de mais nada, instalar o Java 11 e certificar-se que esta é a versão utilizada local ou globalmente antes da execução dos comandos abaixo.**

- cd ~/.../controle_usuarios/backend/
- mvn clean install
- mvn spring-boot:run

Swagger: http://localhost:9090/api/controleUsuarios/swagger-ui.html

#### Frontend

- cd ~/.../controle_usuarios/frontend/
- npm install
- npm start

A aplica��o roda na porta http://localhost:3000

#### Obserca��es

O projeto n�o foi concluido, principalmente o frontend, por�m todos servi�os da api est�o funcionando sendo poss�vel cadastrar, editar, remover e listar todos aquelas entidades que possu�rem estas funcionalidades.

Pontos n�o conclu�dos:

- Tratamento para mensagens de BadRequest
- Cadastro de usu�rios no frontend (pela api funciona)
- Valida��o de dados no frontend
- Ajustes de layout


