package com.example.tasklists.services;

import java.util.List;

import com.example.tasklists.repository.TaskRepository;

import com.example.tasklists.entity.Task;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

	private final TaskRepository repository;

	public TaskService(TaskRepository repository) {
		this.repository = repository;
	}

	public List<Task> findAll(){
		return repository.findAll();
	}

	public Task save(Task task) {
		return repository.save(task);
	}
	
	public void delete(Task task) {
		repository.delete(task);
	}

}
