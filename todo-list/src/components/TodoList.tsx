import React, { useState } from 'react';
import TodoItem from './TodoItem';

type TodoItem = {
    title: string;
}

function TodoList() {
    const [inputText, setInputText] = useState<string>("");
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const handleSubmit = () => {
        if (inputText === "") {
            return;
        }
        setTodos(todos => todos.concat({title: inputText}));
        setInputText("");
    }

    const removeTodo = (index: number) => {
        setTodos(todos => todos.splice(index, 1))
    }

    return (
        <div>
            <input value={inputText} onChange={e => handleInput(e)}/>
            <button onClick={handleSubmit}>+</button>
            <ul>
            {todos.map((todoItem, index) => (
                <TodoItem title={todoItem.title} index={index} removeFunction={removeTodo}/>
            ))}
            </ul>
            
        </div>
    );
}

export default TodoList;