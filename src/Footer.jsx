/**
 * Created by lmy on 17-8-11.
 */
import React from 'react'
import {Button} from 'antd'
class TodoFooter extends React.Component {
    deleteAll() {
        this.props.clearDone();
    }

    render() {
        let minus = this.props.todoCount - this.props.todoDoneCount;
        return (
            <div className="todo-footer">
                <span className="item-left">{minus} item left</span>
                <Button>all</Button>
                <Button onClick={this.deleteAll.bind(this)}>clear completed</Button>
            </div>
        );
    }
}

export default TodoFooter