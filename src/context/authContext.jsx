import React,{createContext,useContext,useReducer} from 'react';


const initialState = {
    username  : "",
    password  : "",
    token : null
}

const authReducer = (state,{type,payload}) =>{

    switch(type){
        case 'INITIAL_STATE' : return {
            ...state,
            token : payload
        }
        case 'USERNAME' : return {
            ...state,
            username : payload
        }
        case 'PASSWORD' : return {
            ...state,
            password : payload
        }
        case 'TOKEN' : return {
            ...state,
            token : payload
        }
        case 'CLEAR_CREDENTIALS' : return {
            ...state,
            username : '',
            password : ''
        }
        case 'TEST' : return{
            ...state,
            username : payload.ID,
            password : payload.passcode
        }
        case 'CLEAR_TOKEN' : return {
            ...state,
            username  : "",
            password  : "",
            token : null

        }
        default : return state
    }
}

const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [{username,password,token},authDispatch] = useReducer(authReducer,initialState);

  return (
    <AuthContext.Provider value={{username,password,token,authDispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider};