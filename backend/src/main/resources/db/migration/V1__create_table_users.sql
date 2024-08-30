CREATE TABLE tb_user
(
    id serial PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    phone INTEGER,
    password VARCHAR(15),
    role INTEGER
);

INSERT INTO tb_user (name, email, phone, password, role)
VALUES
    ('Teste', 'teste@teste.com', 1122222222, '123', 1),
    ('Teste ADM', 'testeadm@teste.com', 1122222222, '123', 2);