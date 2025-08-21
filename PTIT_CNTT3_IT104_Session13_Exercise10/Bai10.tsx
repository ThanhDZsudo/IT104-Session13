import React, { Component } from 'react'

type InputString = {
    name: string,
}

export default class Input extends Component<{}, InputString> {
    constructor(props:{}){
        super(props);
        this.state={
            name:"",
        }
    }
    changeName=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({name:e.target.value});
    }
    render() {
        return (
            <div>
                <p><b>Dữ liệu: {this.state.name}</b></p>
                <input 
                placeholder=''
                onChange={this.changeName}
                />
            </div>
        )
    }
}