import { Component } from 'react'
type PropType={age?:number}
type StateType={
    id?: number,
    Name?: string,
    age?: string,
    address?: string
}
export default class Exercise02 extends Component<PropType,StateType> {
    constructor(props:PropType){
        super(props)
        this.state={
            id: 1,
            Name: "Nguyễn Tiến Thành",
            age: "29/06/2006",
            address: "Hà Đông, Hà Nội"
        }
    }
  render() {
    return (
        <>
            <div>Thông tin cá nhân</div>
            <ul>
                <li>id: {this.state.id}</li>
                <li>Tên: {this.state.Name}</li>
                <li>Ngày Sinh: {this.state.age}</li>
                <li>Địa chỉ: {this.state.address}</li>
            </ul>
        </>
    )
  }
}