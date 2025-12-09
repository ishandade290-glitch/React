import { useDispatch, useSelector } from "react-redux"
import {increment, decrement} from "../store/reducers/todo.reducer"

const Todo = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.todos.count)

    const handleIncrement = ()=>{
        dispatch(increment())
    }

    const handleDecrement = ()=>{
        dispatch(decrement())
    }

    return(
        <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {handleIncrement}>Increment</button>
            <button onClick = {handleDecrement}>Decrement</button>
        </div>
        </>
    )
}
export default Todo