import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		// concat create a new array so we're not changing state
		// return state.concat([action.payload.data]);
		return [ action.payload.data, ...state];  // ES6 spread operator
	}
	return state;
}