import React, {useEffect, useState} from "react";
import { getTodos } from "../services/TodoService";

function TodoList(){
    //state
    const [todos, setTodos] = useState([]);

    // dùng useEffect gọi API khi component render lần đầu tiên
    useEffect(() => {
        getTodos().then(response => {
            setTodos(response.data); // lưu dữ liệu vào state
        })
        .catch(error => {
            console.error("Lỗi khi lấy todos: ", error);
        });

    }, []);

    return(
        <div>
            <h2>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}> 
                        <strong>{todo.title}</strong> - {todo.completed ? "Hoàn thành" : "Chưa xong"}
                        </li>
                    ))}
                </ul>
            </h2>
        </div> 
    )
}
export default TodoList;