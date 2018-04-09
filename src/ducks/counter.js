const initialState = {
    currentValue: 0,
    previousValue:0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO'

export function increment(num){
    return {
        type: INCREMENT,
        payload: num
    }
}
export function decrement(num){
    return{
        type: DECREMENT,
        payload: num
    }
}
export function undo(num){
    return{
        type: UNDO,
        payload: num
    }
}
export default function reducer(state = initialState, action){
    switch(action.type){
        case INCREMENT: 
            return {
                currentValue: state.currentValue + action.payload,
                previousValue: state.currentValue
            }
        case  DECREMENT:
            return {
                currentValue: state.currentValue - action.payload,
                previousValue: state.currentValue,
            }
        case UNDO:
            return {
                currentValue: action.payload,
                previousValue: state.currentValue
            }
        default:
            return state;
    }
}