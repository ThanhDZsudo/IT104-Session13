
export default function Body() {
    return (
        <>
            {/* Todo List */}
            <div className="todo-list">
                <div className="todo-item">
                    <input type="checkbox" className="todo-checkbox" />
                    <span className="todo-text">Học HTML và CSS</span>
                    <div className="todo-actions">
                        <button className="delete-btn">🗑️ Xóa</button>
                    </div>
                </div>
                <div className="todo-item">
                    <input type="checkbox" className="todo-checkbox"  />
                    <span className="todo-text completed">Hoàn thành dự án website</span>
                    <div className="todo-actions">
                        <button className="delete-btn">🗑️ Xóa</button>
                    </div>
                </div>
                <div className="todo-item">
                    <input type="checkbox" className="todo-checkbox" />
                    <span className="todo-text">Đi mua sắm</span>
                    <div className="todo-actions">
                        <button className="delete-btn">🗑️ Xóa</button>
                    </div>
                </div>
                <div className="todo-item">
                    <input type="checkbox" className="todo-checkbox"  />
                    <span className="todo-text completed">Đọc sách lập trình</span>
                    <div className="todo-actions">
                        <button className="delete-btn">🗑️ Xóa</button>
                    </div>
                </div>
                <div className="todo-item">
                    <input type="checkbox" className="todo-checkbox" />
                    <span className="todo-text">Tập thể dục buổi sáng</span>
                    <div className="todo-actions">
                        <button className="edit-btn">✏️ Sửa</button>
                        <button className="delete-btn">🗑️ Xóa</button>
                    </div>
                </div>
                <div className="todo-item">
                    <input type="checkbox" className="todo-checkbox" />
                    <span className="todo-text">Chuẩn bị bài thuyết trình</span>
                    <div className="todo-actions">
                        <button className="delete-btn">🗑️ Xóa</button>
                    </div>
                </div>
            </div>
        </>
    )
}
