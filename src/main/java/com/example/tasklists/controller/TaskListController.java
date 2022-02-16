package com.example.tasklists.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasklists.entity.TaskList;
import com.example.tasklists.services.TaskListService;

@RequestMapping("/api/tasklists")
@RestController
@CrossOrigin(origins={"http://localhost:8081", "http://192.168.1.3:8081"})
public class TaskListController {

	private final TaskListService service;

    public TaskListController(TaskListService service) {
        this.service = service;
    }

    @GetMapping
    public List<TaskList> findAll(){
        return service.findAll();
    }

}
