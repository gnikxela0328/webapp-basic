import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //reducers here
    //reducer name: reducer file
});

export default rootReducer;


/*
Example reducer

const demoReducer = (state = false, action) => {

    switch (action.type) {
        case "DEMO_ON":
            return state = true;
        case "DEMO_OFF":
            return state = false;;
        default:
            return state;

    }
}

export default demoReducer;

*/