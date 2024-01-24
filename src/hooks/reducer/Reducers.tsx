export default (state:any, action:any) => {
  switch (action.type) {
    case 'add_newTask':
      return {
        ...state,
        tasks: [ ...state.tasks, action.payload ]
      }

    case 'delete_newTask': 
      return {
        tasks: state.tasks.filter((task:any) => task.id !== action.payload)
      }

    case 'completed_newTask':
      const updatedTasks = [...state.tasks];
      const indexToUpdate = updatedTasks.findIndex(task => task.id === action.payload);
    
      if (indexToUpdate !== -1) {
        updatedTasks[indexToUpdate] = { ...updatedTasks[indexToUpdate], completed: !updatedTasks[indexToUpdate].completed };
      }
    
      return {
        tasks: updatedTasks
      };
    default:
      return state;
  }
}