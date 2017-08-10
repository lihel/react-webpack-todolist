/**
 * Created by lmy on 17-8-10.
 */
/*
 import React, {Component} from 'react';
 import {render} from "react-dom";

 class HelloMessage extends React.Component {

 render() {
 return <div>Hello World</div>;
 }
 }
 render(<HelloMessage />, document.getElementById('app'));
 */
import React, {Component} from 'react';
import {render} from "react-dom";
class Head extends React.Component {
    render() {
        return (<div className="head">todos</div> );
    }
}

function loadHead() {
    render(
        <Head/>,
        document.getElementById('head')
    );
}

function loadBtn() {
    const btn = (
        <div className="btn">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
    render(btn,
        document.getElementById('footer')
    );
}


class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work_list: []
        }

        this.Enter = this.Enter.bind(this);
    }

    render() {
        let txtCenter = {
            paddingLeft: 180
        }
        let checkboxStyle = {
            paddingLeft: 0
        }
        let textStyle = {
            width: 300,
            height: 30,
            borderRadius: 15,
        }
        return (
            <div>
                <div style={txtCenter}>
                    <input type="text" style={textStyle} ref="myWork" placeholder="What need to be done?"
                           onKeyUp={this.Enter}/>
                </div>

                {
                    this.state.work_list.map(function (textValue) {
                        return (
                            <div style={checkboxStyle}><input key={textValue} type="checkbox"/>{textValue}</div>
                        );
                    })
                }

            </div>
        );
    }

    Enter(event) {
        var works = this.state.work_list;
        var work = this.refs.myWork.value;
        if (event.keyCode == 13) {
            works.push(work);
            this.setState({work_list: works});
            this.refs.myWork.value = "";
        }


    }
}

let main = ()=> {
    loadHead();
    render(
        <Greeting/>,
        document.getElementById('list')
    );
    loadBtn();

}

main();