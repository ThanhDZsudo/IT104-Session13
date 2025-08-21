import  { Component } from 'react'
import Children_Comp from './Children_Comp'

type PropTypes={age?: number}
type stateType={
    name?: string
}
export default class Parent_Comp extends Component<PropTypes,stateType> {
    constructor(props:PropTypes){
        super(props)
        this.state = {
            name: "Nguyễn Văn Nam"
        }
    }
  render() {
    const {name} = this.state;
    return (
      <>
      <h1>Parent_Comp: {name}</h1>
      <Children_Comp name={name}/>
      </>
    )
  }
}