package com.yzakcarmo.backend.repositories;

import com.yzakcarmo.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
