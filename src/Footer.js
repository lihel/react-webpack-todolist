/**
 * Created by lmy on 17-8-11.
 */
import React from 'react';
import {Button} from 'antd';

class TodoFooter extends React.Component {
    deleteAll() {
        this.props.clearDone();
    }

    all() {
        this.props.showAll();
    }

    showActive() {


    }

    render() {
        let minus = this.props.todoCount - this.props.todoDoneCount;
        return (
            < div className="todo-footer">
                < span className="item-left"> {minus} item left </span >
                < Button onClick={this.all.bind(this)}>all</Button >
                < Button onClick={this.showActive.bind(this)}> Active </Button >
                < Button > Completed</Button >
                < Button onClick={this.deleteAll.bind(this)}>clear completed </Button >
            </div >
        );
    }
}

export default TodoFooter

