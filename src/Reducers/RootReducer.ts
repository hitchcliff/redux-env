import { combineReducers } from 'redux';
import testReducer from './test/test.reducer';

const RootReducer = combineReducers({
    test: testReducer
})

export default RootReducer  