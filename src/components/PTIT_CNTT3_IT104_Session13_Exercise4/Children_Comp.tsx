import  { Component } from 'react'
type PropType={
    name?: string
}
export default class Children_Comp extends Component<PropType> {
  render() {
    return (
        <>
        <h2>Children_Comp: {this.props.name}</h2>
        
        </>
    )
  }
}