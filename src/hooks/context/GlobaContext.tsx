import { useContext, createContext, ReactNode, useReducer, useState, useEffect } from "react"
import Reducers from "../reducer/Reducers"

const initialStateTask = {
  tasks: []
}

interface PropsContext {
  children: ReactNode
}

export const context = createContext<any>(null)

export const useGlobalState = () => {
  const contextInstance = useContext(context)
  return contextInstance
}

interface TaskType {
  task: string
}

/* const init = () => {
  
} */

export const GlobalProvider = ({ children }:PropsContext) => {

  const [ state, dispatch ] = useReducer(Reducers, initialStateTask, () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : initialStateTask
  })
  const [ open, setOpen ] = useState<boolean>(false)


  const addNewTask = ( task: TaskType ) => {
    dispatch({
      type: 'add_newTask',
      payload: task,
    })
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( state ))
  },[state])

  const deleteOpenModalTask = () => {
    setOpen(true)
  }


  const deleteCloseModalTask = () => {
    setOpen(false)
  }

  const deleteTaskItem = (id:string) => {
    dispatch({
      type: 'delete_newTask',
      payload: id
    })
    setOpen(false)
  }

  const completedTaskItem = (id:string) => {
    dispatch({
      type: 'completed_newTask',
      payload: id,
    })
  }


  return (
    <context.Provider
      value={ {
        tasks: state.tasks,
        addNewTask,
        deleteTaskItem,
        completedTaskItem,
        deleteOpenModalTask,
        deleteCloseModalTask,
        setOpen,
        open
      } }
    >
      { children }
    </context.Provider>
  )
}