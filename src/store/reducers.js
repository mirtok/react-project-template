/**
 *  工具函数，用于组织多个reducer，并返回reducer集合
 *  一个reducer就是一个函数 ，不同的action有不同的处理逻辑
 */
import {combineReducers } from 'redux';
import {DEL_TODO,ADD_TODO} from  './actions-types';
import defaultState from './state';
import {message} from "antd";

const pageTitle =  (state = defaultState.pageTitle, action) =>{
    switch (action.type) {
        default:
            return state
    }
};


const workList =  (state = defaultState.workList, action) => {
    let newWorkList = [...state];
    switch (action.type) {
        case DEL_TODO:
            newWorkList.splice(action.data,1);
            message.success("删除成功!");
            return newWorkList;
        case ADD_TODO:
            newWorkList.push({text:action.data});
            message.success("添加成功!");
            return newWorkList;
        default:
            return state
    }
};

// 导出所有reducer
export default combineReducers({
    pageTitle,
    workList,
})


