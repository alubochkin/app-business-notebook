import { CREATE_LIST } from '../types';

export const createListAC = (listTask) => ({ type: CREATE_LIST, payload: { listTask } });

