package com.yzakcarmo.backend.config;

import com.yzakcarmo.backend.entities.User;
import com.yzakcarmo.backend.entities.enums.UserRole;
import com.yzakcarmo.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        User u1 = new User(null, "Teste", "teste@teste.com", 1122222222, "123", UserRole.DEFAULT);
        User u2 = new User(null,"Teste ADM", "testeadm@teste.com", 1122222222, "123", UserRole.ADMIN);
        userRepository.saveAll(Arrays.asList(u1,u2));
    }
}
