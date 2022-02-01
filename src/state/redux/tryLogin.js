const reducer = (state = "Logged Out", action) => {
  if(action.type==='LOGGED_IN'){
    return "Hi "+action.value;
  }
  else if(action.type==='LOGGED_OUT'){
    return "Logged Out";
  }
  else {
    return state;
  }

}

export default reducer;
