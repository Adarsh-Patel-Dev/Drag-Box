function positionReducer(state,action){

    switch(action.type){
        case 'BOTTOM_RIGHT':
            return {...state, position: action.payload, cordinates:{x: 0, y: 0}};
        case 'CENTER':
            return {...state, position: action.payload, cordinates:{x: 0, y: 0}};
        case 'MOVE':
            return {...state, position:action.payload, cordinates: action.values};
        default:
            return state;
    }
}

export { positionReducer };