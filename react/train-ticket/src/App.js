/*
 * @Author: zzj
 * @Date: 2021-03-14 16:22:23
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-25 16:15:45
 * @Description:
 */
import { useState, useCallback, useRef } from "react";

let idSeq = Date.now();

function Control(props) {
  const { addTodo } = props;
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();
    if (newText === "") {
      return;
    }
    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false,
    });

    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef}></input>
      </form>
    </div>
  );
}

function Todos(props) {
  const { todos, removeTodo, toggleTodo } = props;
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          ></TodoItem>
        );
      })}
    </ul>
  );
}

function TodoItem(props) {
  const {
    todo: { id, text, complete },
    toggleTodo,
    removeTodo,
  } = props;
  const onChange = () => {
    toggleTodo(id);
  };
  const onRemove = () => {
    removeTodo(id);
  };

  return (
    <li>
      <input type="checkbox" onChange={onChange} checked={complete}></input>
      <label>{text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((todo) => {
    setTodos(() => [...todos, todo]);
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos(() =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }, []);

  const toggleTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
      })
    );
  };

  return (
    <div>
      <Control addTodo={addTodo}></Control>
      <Todos
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        todos={todos}
      ></Todos>
    </div>
  );
}

export default TodoList;
