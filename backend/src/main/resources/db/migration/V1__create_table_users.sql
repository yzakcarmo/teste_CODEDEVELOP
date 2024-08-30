CREATE TABLE users
(
    id serial PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    phone INTEGER,
    password VARCHAR(15),
    role INTEGER
);