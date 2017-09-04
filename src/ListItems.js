/**
 * Created by lmy on 17-8-11.
 */
import React from 'react'
import {Button, Checkbox} from 'antd';

class Item extends React.Component {
    handlerChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    handlerDelete() {
        this.props.deleteTodo(this.props.index)
    }

    render() {
        let className = this.props.isDone ? 'task-done' : '';
        return (
            <div>
                <p>
                    <Checkbox checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                    <span className={className + ' task'}>{this.props.text}</span>
                    <Button onClick={this.handlerDelete.bind(this)}>删除</Button>
                </p>
            </div>
        )
    }
}

export default Item;