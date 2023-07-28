const initialState = {
    user: {}
}

const eventReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_EVENT":
            state.user = action.value;
            return state;
        default:
            return state;
    }
}

export default eventReducer;