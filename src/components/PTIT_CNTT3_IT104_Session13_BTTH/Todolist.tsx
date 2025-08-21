import React, { Component } from 'react'
import Header from './Header'
import Input from './Input'
import AddList from './AddList'
import Body from './Body'
import Footer from './Footer'
import './Todolist.css'


export default class Todolist extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Header></Header>
                    <Input></Input>
                    <AddList></AddList>
                    <Body></Body>
                    <Footer></Footer>
                </div>
            </>
        )
    }
}
