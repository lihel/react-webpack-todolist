/**
 * Created by lmy on 17-8-12.
 */
import React, {Component} from 'react';

class Input extends React.Component {

    handlerKeyUp(e) {
        if (e.keyCode == 13) {
            let value = e.target.value;
            if (!value) return false;
            let newItem = {
                text: value,
                isDone: false
            };
            e.target.value = '';
           this.props.addTodo(newItem)
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="What need to be done?" onKeyUp={this.handlerKeyUp.bind(this)}/>
            </div>
        )
    }
}

export default Input;
