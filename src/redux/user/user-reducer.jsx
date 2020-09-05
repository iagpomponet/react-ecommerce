//reducer recebe o ultimo estado

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}