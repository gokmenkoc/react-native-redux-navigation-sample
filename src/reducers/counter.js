import createReducer from '../libraries/reducer-library';
import * as types from '../types/counter';


const initialState = {
    count: 0,
};

export const counter = createReducer(initialState, {
    [types.INCREMENT](state, action) {
        return {
            ...state,
            count: state.count + 1
        };
    },
    [types.DECREMENT](state, action) {
        return {
            ...state,
            count: state.count - 1
        };
    }
});
