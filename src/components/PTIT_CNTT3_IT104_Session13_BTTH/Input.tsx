
export default function Input() {
    return (
        <>
            {/* Input Section */}
            <div className="input-section">
                <div className="input-group">
                    <input
                        type="text"
                        className="task-input"
                        placeholder="Nhập công việc cần làm..."
                        maxLength={100}
                    />
                    <button className="add-btn">➕ Thêm</button>
                </div>
                <div className="error-message">{/* Thông báo lỗi sẽ hiển thị ở đây */}</div>
            </div>
        </>
    )
}
