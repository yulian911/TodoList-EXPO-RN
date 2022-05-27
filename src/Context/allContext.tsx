import React ,{createContext ,useState,useContext,useReducer,useEffect} from 'react'
import { auth} from '../firebase/firebase'
import {onAuthStateChanged} from 'firebase/auth'

type Props ={
    children:React.ReactNode
}

export const AllContext = createContext(null)

export const authReducer =(state:any,action:any)=>{
  switch(action.type){

      case 'LOGIN':
          return{...state,user:action.payload }
      case 'LOGOUT':
           return{...state,user:null }
      case 'AUTH_IS_READY':
          return{...state,user:action.payload ,authIsReady:true }
  
      default:
          return state
  }
}

export const AllProvider= ({children}:Props) => {
    const value = useProviderAll();
    return (
      <AllContext.Provider value={value}>{children}</AllContext.Provider>
    );
  };
  const useProviderAll = () => {

    const [state,dispatch]=useReducer(authReducer,{
      user:null,
      authIsReady:false
  })

  useEffect(() => {
    ///sprawdza czy jest user 
  const unsub =onAuthStateChanged(auth,(user)=>{
    dispatch({type : 'AUTH_IS_READY' ,payload:user})
      })
     return ()=> unsub()
     }, [])

    return {
        ...state,
        dispatch,
     
     
    };
  };
  export const useAll = () => {
    const all = useContext(AllContext);
    if (!all) {
      throw new Error('useProfile must be used inside ProfileContexProvider');
    }
    return all;
  };
 