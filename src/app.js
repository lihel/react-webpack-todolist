/**
 * Created by lmy on 17-8-11.
 */
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Input from './Input';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    addTodo(item) {
        this.state.todos.push(item);
        this.setState({todos: this.state.todos})
    }

    changeTodoState(index, isDone) {
        let todos = this.state.todos;
        this.state.todos[index].isDone = isDone;
        this.setState({
            todos: todos
        });
    }

    deleteTodo(index) {
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
    }

    clearDone() {
        let todos = this.state.todos.filter((todo) => !todo.isDone);
        this.setState({
            todos: todos
        });
    }

    showAll() {
        let todos = this.state.todos;
        this.setState({
            todos: todos
        });
    }

    showleft() {
        // let todos = this.state.todos.filter((todo) => !todo.isDone);
        // this.setState({
        //     todos: todos
        // });
    }

    render() {
        let info = {
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0
        }
        return (
            <div>
                <Header/>
                <Input addTodo={this.addTodo.bind(this)}/>
                <Main todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)}
                      deleteTodo={this.deleteTodo.bind(this)}/>
                <Footer {...info} clearDone={this.clearDone.bind(this)} showAll={this.showAll.bind(this)}
                        showleft={this.showleft.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));