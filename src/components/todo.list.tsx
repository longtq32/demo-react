import TodoData from "./todo.data";


const todos = [
    {
        id: 1,
        title: "Learn React TypeScript",
        isComplete: false
    },
    {
        id: 2,
        title: "Subscribe Youtube HoiDanIT",
        isComplete: true
    },
    {
        id: 3,
        title: "Learn English",
        isComplete: true
    },
]


const TodoList = () => {
    return (
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: 10,
        }}>
            <div>My todo list:</div>
        <br />
        <TodoData 
            todos={todos} />

        </div>
    )
}

export default TodoList;
