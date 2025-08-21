import { Component } from 'react'

type PropTypes = {age?:number};
type StateTypes = {
    companyName?: string
}
export default class Exercises01 extends Component<PropTypes,StateTypes> {
    constructor(props:PropTypes){
        super(props);
        this.state={
            companyName:"Nguyễn Tiến Thành"
        }
    }
  render() {
    return (
      <div>Họ và Tên: {this.state.companyName}</div>
    )
  }
}