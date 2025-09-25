import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./services/TodoService";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load dữ liệu khi app chạy
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    getTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Lỗi khi tải todos:", err));
  };

  // Thêm Todo
  const handleAdd = () => {
    if (!title.trim()) {
      alert("Title không được để trống!");
      return;
    }
    const newTodo = { title, description, completed: false };
    addTodo(newTodo).then(() => {
      setTitle("");
      setDescription("");
      fetchTodos();
    });
  };

  // Xóa Todo
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      deleteTodo(id).then(() => fetchTodos());
    }
  };

  // Toggle Completed
  const toggleCompleted = (todo) => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed }).then(() => fetchTodos());
  };

  return (
    <div className="container mt-5" style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 class="text-center text-primary mb-4">TODO APP</h1>


      {/* Form thêm todo */}
      <div className="card p-3 mb-4 shadow-sm" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nhập tiêu đề..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Nhập mô tả..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />
        <button className="btn btn-primary" onClick={handleAdd} style={{ padding: "10px 20px" }}>
          Thêm ghi chú
        </button>
      </div>

      {/* Danh sách todo */}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            <strong>{todo.title}</strong> - {todo.description}{" "}
            <span
              style={{
                color: todo.completed ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {todo.completed ? "(Hoàn thành)" : "(Chưa xong)"}
            </span>
            <div>
              <button className="btn btn-success" onClick={() => toggleCompleted(todo)} style={{ marginRight: "10px" }}>
                {todo.completed ? "Bỏ hoàn thành" : "Hoàn thành"}
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
