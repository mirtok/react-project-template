import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {Button, Input, List, Typography,Spin} from 'antd';
import { delTodo, addTodo } from './store/actions'
import './App.css';

const {Title} = Typography;

class App extends Component {

    state = {
        value: '',
        loading: false
    };

    changeVal = (e) => {
        this.setState({value: e.target.value})
    };

    appAddTodo = (data) =>{
        this.props.appAddTodo(data);
        this.setState({value: ''})
    };

    appDelTodo = (index) =>{
        this.setState({loading: true});
        setTimeout(()=> {
            this.props.appDelTodo(index);
            this.setState({loading: false});
        },1000)
    };


    render() {
        const {value,loading} = this.state;
        const {pageTitle,workList} = this.props;
        return (
            <Fragment>
                <div className="wrap">
                    <Spin spinning={loading}>
                        <div className="wrap-box">
                            <Title level={3} style={{'textAlign': 'center'}}>{pageTitle}</Title>
                            <div className="wrap-top">
                                <Input value={value} placeholder="add someThings" onChange={(e) => this.changeVal(e)}/>
                                <Button type="primary" onClick={() => this.appAddTodo(value)}>添加</Button>
                            </div>
                            <div className="wrap-content">
                                <List
                                    bordered
                                    dataSource={workList}
                                    renderItem={(item, index) => (
                                        <List.Item key={index}>
                                            <span> {item.text}</span>
                                            <Button type="danger" onClick={() => this.appDelTodo(index)}>删除</Button>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                    </Spin>
                </div>
            </Fragment>
        )
    }
}

/**
 * mapStateToProps：将state映射到组件的props中
 */
const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        workList: state.workList
    }
};

/**
 * mapDispatchToProps：将dispatch映射到组件的props中
 * dispatch(addTodo((data))) 相当于
 * dispatch((dispatch, getState) => {
 *      dispatch({ type: 'SET_PAGE_TITLE', data: data })
 * )}
 */

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        appAddTodo: (data) => dispatch(addTodo(data)),
        appDelTodo: (data) => dispatch(delTodo(data))
    }
};

/**
 * connect() 高阶函数 之都在this.props 里面
 * */

export default connect(mapStateToProps, mapDispatchToProps)(App);
