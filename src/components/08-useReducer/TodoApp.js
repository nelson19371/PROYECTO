import React, {useReducer,useEffect} from 'react'
import './styles.css'
import {todoReducer} from './todoReducer'
import {useForm} from '../../hooks/useForm'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'



const init = () =>{

    return JSON.parse(localStorage.getItem('todo'))  || [];
    // return[{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
    

}







export const TodoApp = () => {

    const [ todo, dispatch ] = useReducer(todoReducer,[],init);


  

    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(todo) )

    }, [todo])

    const handleDelete = (todoId) => {
        
        const action = {
            type: 'delete',
            payload: todoId

        }

        dispatch(action);

    }

    const handleToggle = (todoId) =>{

        dispatch({
            type: 'toggle',
            payload: todoId

        })


    }

    const handleAddTodo = (newTodo) =>{
            

        dispatch( {
            type: 'add',
            payload: newTodo

        });

    }
 





  

    return (
        <div>
            <h1>Tareas por hacer ({todo.length})</h1>
            <hr/>
            
        <div className="row">
            <div className="col-7">
            <TodoList
                todo= {todo}
                handleDelete={handleDelete}
                handleToggle={ handleToggle}
            />
            </div>
            <div className="col-5">
                <TodoAdd
                    handleAddTodo= {handleAddTodo}
                />
               
                    
                    
               




            </div>

        </div>

        

            </div>
        
    )
}
