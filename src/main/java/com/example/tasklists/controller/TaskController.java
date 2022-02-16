package com.example.tasklists.controller;

import com.example.tasklists.entity.Task;
import com.example.tasklists.services.TaskService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/tasks")
@RestController
@CrossOrigin(origins={"http://localhost:8081", "http://192.168.1.3:8081"})
public class TaskController {
	
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> findAll(){
        return service.findAll();
    }
    
    @PostMapping
    public Task createTask(@RequestBody Task task) {
    	return service.save(task);
    }
    
    @PostMapping(value = "/editTask")
    public Task updateTask(@RequestBody Task task) {
    	return service.save(task);
    }
    
    @PostMapping(value = "/checkTask")
    public Task checkTask(@RequestBody Task task) {
    	return service.save(task);
    }
    
    @PostMapping(value = "/deleteTask") 
    public void deleteTask(@RequestBody Task task) {
    	service.delete(task);
    }
    
    
}
