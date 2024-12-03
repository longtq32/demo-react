

interface IProp {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[]
}

const TodoData = (props: IProp) => {
    // return (
    //     <div>
    //         {JSON.stringify(props)}
    //     </div>
    // )

    const { todos } = props;
    
    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.isComplete}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;