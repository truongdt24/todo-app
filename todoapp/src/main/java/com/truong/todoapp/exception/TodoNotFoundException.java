package com.truong.todoapp.exception;

public class TodoNotFoundException extends RuntimeException{
    public TodoNotFoundException(Long id){
        super(" Không tìm thấy todo id: " + id);
    }
}
