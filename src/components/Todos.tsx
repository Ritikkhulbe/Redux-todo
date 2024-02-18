import { useDispatch, useSelector } from "react-redux"
import { RootState, Todo, removeTodo } from "../features/todo/todoSlice";


const Todos = () => {
    const todos = useSelector((state: RootState)=> state.todos);
    const dispatch = useDispatch();

  return (<>
    <div>Todos</div>
    <ul className="list-none">
    {
        todos.map((todo: Todo) => (
            <li key={todo.id} className="text-black">{todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))
    }
    </ul>
    </>
  )
}

export default Todos