# Teste CODEDEVELOP

## Etapas para executar o projeto
1) Compilar o backend. Pra isso, apontar o terminal na pasta backend e executar o comando:
```
./mvnw clean install
```
2) Agora é hora de rodar o backend, para poder alimentar o front. Ainda dentro da raiz, execute:
```
./mvnw spring-boot:run
```
2.1) O comando anterior executa o backend com o profile que está configurado na `src/main/resources/application.properties`. Atualmente o backend tem dois profiles(dev e test), que estão mais explicados no README dele. Caso queria rodar usando um especifico, só adicionar a propriedade `-Dspring.profiles.active`:
```
./mvnw spring-boot:run -Dspring.profiles.active=dev target/backend-0.0.1-SNAPSHOT.jar
```
3) Instalar as dependencias do frontend. Vai até a pasta frontend e execute o comando
```
npm install
```
5) Para iniciar o servidor de desenvolvimento
```
ng serve
```
7) Acesse a aplicação em `http://localhost:4200`.

## Endpoints
* GET /api/users: Lista todos os usuários.
* GET /api/users/{id}: Busca um usuário pelo ID.
* POST /api/users: Cria um novo usuário.
* PUT /api/users/{id}: Atualiza um usuário existente.
* DELETE /api/users/{id}: Exclui um usuário.

## Estrutura dos diretorios
Backend (Spring Boot)
```
src/
│
├── main/
│   ├── java/
│   │   └── com.yzakcarmo.backend/
│   │       ├── config/       # Configuração do CORS e os dados do profile test
│   │       ├── entities/     # Entidade JPA
│   │       ├── repositories/ # Interfaces de repositórios
│   │       ├── resources/    # Controladores REST
│   │       ├── services/     # Lógica de negócios
│   │       └── BackenApplication.java # Classe principal
│   │
│   └── resources/
│       ├── db.migration                 # Queries SQL do Flyway
│       ├── application.properties       # Configurações da aplicação
│       ├── application-dev.properties   # Configurações do profile dev
│       └── application-test.properties  # Configurações do profile test
└── test/                                # Testes unitários e de integração
```

Frontend (Angular)
```
src/
│
├── app/
│   ├── components/       # Componentes do Angular
│   ├── models/           # Modelos para tipagem dos dados
│   ├── services/         # Serviços para comunicação com o backend
│   ├── app.module.ts     # Módulo principal
│   ├── app.component.ts  # Componente raiz
│   └── ...               # Outros arquivos e pastas
└── ...                   # Outros arquivos e pastas
```
