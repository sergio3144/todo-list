import { useGlobalState } from '../../../hooks/context/GlobaContext';
import { MdCheckCircle } from "react-icons/md";
import '../../../App.css';
import { ModalDelete } from './ModalDelete';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const TasksItems = () => {
  const { tasks, deleteTaskItem, completedTaskItem, deleteOpenModalTask } = useGlobalState();
  const [idTask, setIdTask] = useState<string>('');
  const [titleTask, setTitleTask] = useState<string>('');

  return (
    <>
      <div className="bg-item rounded-md mt-10 px-5">
        {tasks.map((task: any) => (
          <div key={task.id} className={`flex justify-between items-center border-b p-2 border-opacityText ${task.completed && 'complete'}`}>
            <span onClick={() => completedTaskItem(task.id)} className={`cursor-pointer ${task.completed && 'complete'}`}>
              <MdCheckCircle size={30} className="text-opacityText" />
            </span>
            <p className="text-baseColor">{task.task}</p>
            <span className='cursor-pointer' onClick={() => {
              setIdTask(task.id);
              setTitleTask(task.task);
              deleteOpenModalTask();
            }}>
              <IoMdClose size={30} className="text-opacityText" />
            </span>
          </div>
        ))}
        <ModalDelete
          functionDeleteTask={() => deleteTaskItem(idTask)}
          taskTextData={titleTask}
        />
        <div className={`flex justify-between pt-3 pb-3`}>
          <p className="text-opacityText font-semibold text-sm">Tienes {tasks.length === 1 ? `${tasks.length} tarea` : `${tasks.length} tareas`}</p>
          <div className="flex gap-5">
            <p className="text-opacityText font-semibold text-sm">Todas</p>
            <p className="text-opacityText font-semibold text-sm">Activas</p>
            <p className="text-opacityText font-semibold text-sm">Completadas</p>
          </div>
          <p className="text-opacityText font-semibold text-sm">Limpiar completadas</p>
        </div>
      </div>
    </>
  );
}

export { TasksItems };
