const initialState = {
    todos: []
    
}


export function todoReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {
        case 'SET_TODOS':
            newState = { ...state, todos: action.todos }
            break;
        // case 'UNDO_REMOVE_CAR':
        //     if (state.lastRemovedCar) {
        //         newState = { ...state, cars: [...state.cars, state.lastRemovedCar], lastRemovedCar: null}
        //     }
        //     break
        default:
    }            
    return newState
}

