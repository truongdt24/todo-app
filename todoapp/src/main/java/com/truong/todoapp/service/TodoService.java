package com.truong.todoapp.service;

import com.truong.todoapp.entity.Todo;
import com.truong.todoapp.exception.TodoNotFoundException;
import com.truong.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Todo addTodo(Todo todo){
        todo.setCreatedAt(LocalDateTime.now());
        todo.setUpdatedAt(LocalDateTime.now());
        return todoRepository.save(todo);
    }
    public List<Todo> getAllTodo(){
        return todoRepository.findAll();
    }
    public Todo getTodoById(Long id){
        return todoRepository.findById(id).orElseThrow(() -> new TodoNotFoundException(id));
    }
    public Todo updateTodo(Long id, Todo newData){
        return todoRepository.findById(id).map(todo -> {
            todo.setTitle(newData.getTitle());
            todo.setDescription(newData.getDescription());
            todo.setCompleted(newData.getCompleted());
            todo.setUpdatedAt(LocalDateTime.now());
            return todoRepository.save(todo);
        }).orElseThrow(() -> new TodoNotFoundException(id));
    }
    public void deleteTodo(Long id){
        if (!todoRepository.existsById(id)){
            throw new TodoNotFoundException(id);
        }
         todoRepository.deleteById(id);
    }

}
