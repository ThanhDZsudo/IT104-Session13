import React, { Component } from 'react'
type State={
    inputString: string,
}

export default class UpdateState extends Component<{}, State> {
    constructor(props:{}){
        super(props);
        this.state = {
            inputString:"Rikkei Academy",
        }
    }

    changeName=()=>{
        this.setState({inputString:"Rikkei Soft"})
    }
    render() {
        return (
            <div>
                <p><b>Tên công ty: {this.state.inputString}</b></p>
                <button onClick={this.changeName}>Change</button>
            </div>
        )
    }
}