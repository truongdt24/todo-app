package com.truong.todoapp.controller;

import com.truong.todoapp.entity.Todo;
import com.truong.todoapp.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/todos")
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    public Todo addTodo(@Valid @RequestBody Todo todo){
        return todoService.addTodo(todo);
    }

    @GetMapping
    public List<Todo> getAllTodo(){
        return todoService.getAllTodo();
    }

    @GetMapping("/{id}")
    public Todo searchTodoById(@PathVariable Long id){
        return todoService.getTodoById(id);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id,@Valid @RequestBody Todo newData){
        return todoService.updateTodo(id,newData);
    }

    @DeleteMapping("/{id}")
    public String deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
        return "Đã xóa thành công";
    }

}
