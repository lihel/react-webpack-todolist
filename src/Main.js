/**
 * Created by lmy on 17-8-11.
 */
import React from 'react';
import Item from './ListItems';
import TodoFooter from './Footer';

class Main extends React.Component {
    render() {
            return (
                <ul>
                    {
                        this.props.todos.map((todo, index) => {
                            //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。
                            return <Item text={todo.text} isDone={todo.isDone} index={index} {...this.props}
                                         key={index}/>
                        })
                    }
                </ul>
            )


    }
}
export default Main;