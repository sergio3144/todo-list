import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { context, useGlobalState } from '../../../hooks/context/GlobaContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: '10px'
};

type ModalProps = {
  functionDeleteTask: () => void,
  taskTextData: string,
}

const ModalDelete = ({ functionDeleteTask, taskTextData }: ModalProps) => {
  const { open, deleteCloseModalTask } = useGlobalState();

  return (
    <Modal
      open={open}
      onClose={deleteCloseModalTask}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p className='text-xl font-semibold'>¿Quieres eliminar la tarea { taskTextData } ?</p>
        <div className='flex gap-2 justify-center mt-5'>
          <button onClick={deleteCloseModalTask} className='bg-blue-500 text p-2 text-white'>Cancelar</button>
          <button onClick={functionDeleteTask} className='bg-red-500 p-2 text-white'>Eliminar</button>
        </div>
      </Box>
    </Modal>
  );
}

export { ModalDelete };
