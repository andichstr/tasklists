package com.example.tasklists.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.tasklists.entity.TaskList;
import com.example.tasklists.repository.TaskListRepository;

@Service
public class TaskListService {

	private final TaskListRepository repository;

	public TaskListService(TaskListRepository repository) {
		this.repository = repository;
	}

	public List<TaskList> findAll(){
		return repository.findAll();
	}
}
