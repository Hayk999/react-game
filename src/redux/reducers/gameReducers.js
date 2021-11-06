import {
    CHECK_ANSWER_P,
    CHECK_ANSWER_F,
    CHECK_ANSWER_R,
} from "../constants/gameConstants";

const initialState = {
    data: [],
    loading: false,
    error: {}
};

const gameReducers =  (state = initialState, action = {}) => {
    switch (action.type) {

        case CHECK_ANSWER_P: {
            return {
                ...state,
                loading: true
            }
        }

        case CHECK_ANSWER_F: {
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload]
            }
        }

        case CHECK_ANSWER_R: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default:
            return state;
    }
}

export default gameReducers