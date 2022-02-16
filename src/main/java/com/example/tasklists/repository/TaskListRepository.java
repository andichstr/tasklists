package com.example.tasklists.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tasklists.entity.TaskList;

public interface TaskListRepository extends JpaRepository<TaskList, Long> {
}
