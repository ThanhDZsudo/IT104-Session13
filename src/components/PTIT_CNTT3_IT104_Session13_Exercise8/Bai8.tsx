import React, { Component } from 'react'
type Todo = {
    id: number;
    name: string;
    assign: string;
    status: boolean;
    created_at: string;
};

type State = {
    todos: Todo[];
};

export default class Todolist extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    name: "Header",
                    assign: "Nguyễn Văn A",
                    status: false,
                    created_at: new Date().toLocaleString(),
                },
                {
                    id: 2,
                    name: "Footer",
                    assign: "Nguyễn Văn B",
                    status: true,
                    created_at: new Date().toLocaleString(),
                },
            ],
        };
    }
    render() {
        return (
            <div>
                <h1>Danh sách công việc</h1>
                <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên công việc</th>
                            <th>Người thực hiện</th>
                            <th>Trạng thái</th>
                            <th>Thời gian tạo</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>{todo.assign}</td>
                                <td style={{color: todo.status ? "green" : "red"}}>
                                    {todo.status ? "Đã hoàn thành" : "Chưa hoàn thành"}
                                </td>
                                <td>{todo.created_at}</td>
                                <td>
                                    <button style={{backgroundColor:"#fff7e6", color:"#dc905f", border:"1px solid #ffe1b0", borderRadius:"3px"}}>Sửa</button> 
                                    <button style={{backgroundColor:"#fff1f0", color:"#d85a7b", border:"1px solid #ffdcdb", borderRadius:"3px"}}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}