#  Todo App (Spring Boot + React)
Ứng dụng **Todo App** 
- Backend: Spring Boot, PostgreSQL, JPA/Hibernate  
- Frontend: React + Bootstrap  
Mục tiêu: Quản lý công việc cần làm (CRUD: Create - Read - Update - Delete).
---
##  Cấu trúc project
```
project-root/
│── todoapp/       # Backend - Spring Boot
│── todo-ui/       # Frontend - React
│── README.md      # Tài liệu hướng dẫn
```
---
##  Backend (Spring Boot)

### Yêu cầu:
- Java 21+
- Maven 3+
- PostgreSQL

### Cài đặt:
1. Tạo database PostgreSQL:
   ```sql
   CREATE DATABASE todo_db;
   ```

2. Cấu hình `application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/todo_db
   spring.datasource.username=postgres
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
   ```

3. Chạy project backend:
   ```bash
   mvn spring-boot:run
   ```
   Server mặc định chạy tại: `http://localhost:8080`
---
##  Frontend (React)
### Yêu cầu:
- Node.js 18+
- npm (hoặc yarn)
### Cài đặt:
1. Vào thư mục frontend:
   ```bash
   cd todo-ui
   ```
2. Cài dependencies:
   ```bash
   npm install
   ```
3. Chạy dev server:
   ```bash
   npm start
   ```
   Ứng dụng frontend chạy tại: `http://localhost:3000`
---
##  API Endpoints
| Method | Endpoint         | Mô tả                  |
|--------|------------------|------------------------|
| GET    | `/todos`         | Lấy danh sách todos    |
| GET    | `/todos/{id}`    | Lấy todo theo ID       |
| POST   | `/todos`         | Tạo mới todo           |
| PUT    | `/todos/{id}`    | Cập nhật todo          |
| DELETE | `/todos/{id}`    | Xóa todo theo ID       |
---
##  Demo UI
Giao diện Todo App đơn giản với các chức năng:
- Thêm công việc mới  
- Xem danh sách công việc  
- Chỉnh sửa công việc  
- Xóa công việc  

```
![ảnh demo](image.png)


---
## Cách chạy

1. Chạy backend:
   ```bash
   mvn spring-boot:run
   ```

2. Chạy frontend:
   ```bash
   cd todo-ui
   npm start
   ```

3. Mở trình duyệt `http://localhost:3000`

---

##  Ghi chú

- Nếu gặp lỗi **CORS** 
- Thêm cái này vào main
  
@Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")// cho phép tất cả API
                        .allowedOrigins("http://localhost:3000") // cho phép react gọi
                        .allowedMethods("GET","POST","PUT","DELETE"); // các HTTP method được phép
            }
        };
    }.  

  ```
---

Cre: truongdt24  
Complete: 25/09/2025
