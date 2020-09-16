import {createStore, combineReducers} from 'redux';
import {dishes, Dishes} from './dishes';
import {comments, Comments} from './comments';
import {leaders, Leaders} from './leaders';
import {promotions, Promotions} from './promotions';


export const ConfigureStore=() =>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}