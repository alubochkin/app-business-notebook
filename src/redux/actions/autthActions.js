import { fetchPOST } from '../fetchThunk';
import { SIGN_IN, SIGN_UP } from '../types';

export const signInAC = (dataUser) => ({ type: SIGN_IN, payload: { dataUser } });
export const signUpAC = (dataUser) => ({ type: SIGN_UP, payload: { dataUser } });


export const signUpThunk = (dataUser) => async (dispatch) => {
  console.log('Koca: dataUser ', dataUser);
  
  try {
    const response = await fetchPOST({
      path: 'http://localhost:3100/auth/signin',
      body: dataUser
    });

    if (!response.error) {
      const dataUser = response;
      dispatch(signUpAC(dataUser));
    } 

  } catch (err) {
    console.log('Err', err);
  }
};