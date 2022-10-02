import React, { Component } from "react";

interface ITodoItemProps {
    title: string;
    index: number;
    removeFunction: (index: number) => void;
}

function TodoItem({title, index, removeFunction} : ITodoItemProps) : JSX.Element {
  return <li>
    <div>
    <p>{title}</p>
    <button onClick={() => removeFunction(index)}>-</button>
    </div>
  </li>;
}

export default TodoItem;
