import { CREATE_LIST } from '../types';


export default function listTasksReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_LIST:
      console.log('Listtaskreducer>>>>>', action.payload.listTask)
      return { ...state, 
        listTasks: 
          state.listTask ? [...state.listTask, action.payload.listTask ] 
          : [action.payload.listTask], 
        
      };


    default:
      return state;
  }
}