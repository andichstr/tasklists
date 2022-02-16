package com.example.tasklists.repository;

import com.example.tasklists.entity.Task;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
	
}
