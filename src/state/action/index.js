export const loggedIN = (name) => {
    return (dispatch)=>{
        dispatch({
            type: "LOGGED_IN",
            value: name
        })
    }
}
export const loggedOUT = (name) => {
    return (dispatch)=>{
        dispatch({
            type: "LOGGED_OUT",
            value: name
        })
    }
}

