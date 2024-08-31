package com.yzakcarmo.backend.repositories;

import com.yzakcarmo.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameContainingIgnoreCase(String name);
    List<User> getAllByRole(Integer role);
}
