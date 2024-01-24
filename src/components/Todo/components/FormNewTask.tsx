import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useGlobalState } from "../../../hooks/context/GlobaContext";
import { IoIosWarning } from "react-icons/io";

const FormNewTask = () => {
  const { addNewTask } = useGlobalState()
  const [ textTask, setTextTask ] = useState<string>('');
  const [ errorSubmit, setErrorSubmit ] = useState<boolean>(false)

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTextTask( e.target.value )
    textTask.length >= 0 && setErrorSubmit(false)
  }

  const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if(textTask.trim().length <= 1) { 
      setErrorSubmit(true) 
      if(!textTask) return
    } else setErrorSubmit(false)

    addNewTask({
      id: window.crypto.randomUUID(),
      task: textTask,
      completed: false
    })
    setTextTask('')

  }

  return (
    <>
      <form action="" className="relative mt-5" onSubmit={ handleOnSubmit }>
        <button className="absolute top-3.5 left-2"> 
         {errorSubmit ? <IoIosWarning size={30} color="red"/> : <IoMdAddCircle size={30} color="white"/> }
        </button>
        <input 
          onChange={ handleChangeInput } 
          value={ textTask }
          className="w-full h-14 p-3 text-lg pl-11 outline-none font-semibold rounded-lg bg-item text-opacityText" 
          type="text" 
          placeholder={errorSubmit ? 'Ingresa una tarea válida' : "Crear nueva tarea"}
        />
      </form>
    </>
  )
}

export { FormNewTask }
