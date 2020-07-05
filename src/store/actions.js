/**
 * action也是函数
 */
import {DEL_TODO,ADD_TODO} from  './actions-types';

/**
 * 增加
 * @param data
 * @returns {Function}
 */
export const addTodo =  (data) => {
    return (dispatch, getState) => {
        dispatch({ type: ADD_TODO, data: data })
    }
};

/**
 * 删除
 * @param data
 * @returns {Function}
 */
export const delTodo =  (data) => {
    return (dispatch, getState) => {
       dispatch({ type: DEL_TODO, data: data })
    }
};
