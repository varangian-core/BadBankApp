import React from "react";
import  {useActions} from "./Action";




export const Context = React.createContext();


const initialState = {
    currentUser: null,
    success: false,
    error: false,
    users : [
        { name: "admin",
            email: "admin@yahoo.com",
            password: "none",
            balance: 0
        },
        {
            name: "user",
            email: "user@yahoo.com",
            password: "password",
            balance: 0
        } ]
}

const reducer = (state, action) =>{
        if (action.type == "ADD_ACCOUNT"){
            return {...state, newAccounts: action.payload}
        } else if (action.type === "LOGIN"){
            return {...state, authAccount: action.payload}
        }
}


export function provideContext(props) {
    const[state, dispatch] = React.userReducer(reducer, initialState)
    const actions = useActions(state, handle);
    const value = {state, handle, actions};

    return<Context.provideContext value={value}> {props.children} </Context.provideContext>;
}
