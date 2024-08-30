# Teste CODEDEVELOP

## Etapas
1) Buildar o backend. Pra isso, apontar o terminal na pasta backend e executar o comando:
```
./mvnw clean install
```
2) Agora é hora de rodar o backend, para poder alimentar o front. Ainda dentro da raiz, execute:
```
java -jar target/backend-0.0.1-SNAPSHOT.jar
```
2.1) O comando anterior executa o backend com o profile que está configurado na `src/main/resources/application.properties`. Atualmente o backend tem dois profiles(dev e test), que estão mais explicados no README dele. Caso queria rodar usando um especifico, só adicionar a propriedade `-Dspring.profiles.active`:
```
java -jar -Dspring.profiles.active=dev target/backend-0.0.1-SNAPSHOT.jar
```

3) Ativar o frontend
4) Acessar a página local de login
