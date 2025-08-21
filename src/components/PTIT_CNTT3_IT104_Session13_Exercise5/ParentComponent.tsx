import { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

type product ={
    id: number,
    name: string,
    price: number,
    quantity: number,
}
type PropType={age?:number}
type stateType = {
    products: product
}
export default class ParentComponent extends Component<PropType, stateType> {
    constructor(props: PropType){
        super(props)
        this.state={
            products:
                {
                    id: 1,
                    name: "Bưởi ba roi",
                    price: 12000,
                    quantity: 6
                }
        }
    }
  render() {
    const {products} = this.state
    return (
        <>
            <div>ParentComponent</div>
            <ChildrenComponent product={products}/>
        </>
     
    )
  }
}