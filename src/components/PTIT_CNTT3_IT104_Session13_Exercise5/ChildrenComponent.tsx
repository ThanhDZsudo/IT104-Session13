import { Component } from 'react'

type Product ={
    id: number,
    name: string,
    price: number,
    quantity: number 
}
type PropType={
    product: Product;
}
export default class ChildrenComponent extends Component<PropType> {
  render() {
    const {id,name,price,quantity} = this.props.product
    return (
        <>
            <div>ChildrenComponent</div>
            <p>Id: {id}</p>
            <p>Ten: {name}</p>
            <p>Gia: {price}</p>
            <p>So luong: {quantity}</p>
        </>
      
    )
  }
}