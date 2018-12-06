const initialState = {
    monsterInput: {},
    monsterDisplay: {},
    encounter: [],
    XP: 0,
}

// *** ACTION TYPES ***//

const HANDLE_INPUT = 'HANDLE_INPUT';

// *** REDUCER *** //

function reducer(state = initialState, action) {
    switch(action.type) {
        case HANDLE_INPUT:
            return {...state, monsterInput: {...state.monsterInput, [`${action.payload.target.name}`]: action.payload.target.value}}
            break;
        default:
            return {...state}
    }
}

// *** ACTION CREATORS *** //

export function handleInput(event) {
    return {
        type: HANDLE_INPUT,
        payload: event,
    }
}

export default reducer;