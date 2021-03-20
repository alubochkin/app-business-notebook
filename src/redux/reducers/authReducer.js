import { SIGN_IN, SIGN_UP } from '../types';


export default function listTasksReducer(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, 
        user: action.payload.dataUser      
      };

    case SIGN_UP:
      return { ...state, 
        user:  action.payload.dataUser     
    };


    default:
      return state;
  }
}