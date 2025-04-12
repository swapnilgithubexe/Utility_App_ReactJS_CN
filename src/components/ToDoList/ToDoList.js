import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";

import "./ToDoList.css";
import { actions, todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";

function ToDoList() {

  const todos = useSelector(todoSelector);

  const disptach = useDispatch();

  useEffect(() => {
    fetch("http://localhost:4100/api/todos").then(res => res.json()).then(parsedJson => console.log(parsedJson)
    ).catch(err => console.log(err)
    )
  }, [])
  // const todos= store.getState().todos;

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'pending'}>{todo.completed ? 'Completed' : 'Pending'}</span>
            <button className="btn btn-warning"
              onClick={() => {
                // console.log("[LOG]: Todo - Toggle Action Dispatched");
                disptach(actions.toggle(index))
              }
              }
            >Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;