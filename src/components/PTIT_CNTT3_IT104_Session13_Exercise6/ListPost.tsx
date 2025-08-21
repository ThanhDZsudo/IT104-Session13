import { Component } from 'react'
import DetailPost from './DetailPost'

type product={
    id: number,
    title: string,
    content: string,
    author: string
}
type propsType={
    age?:number
}
type stateType={
    products: product[]
}
export default class ListPost extends Component<propsType,stateType> {
    constructor(props:propsType){
        super(props)
        this.state = {
          products: [
            {
              id: 1,
              title: "Tại sao nên học ReactJS",
              content: "Học ReactJs để đi làm",
              author: "David",
            },
            {
              id: 2,
              title: "Props trong ReactJS",
              content: "Props giups truyền dữ liệu từ component con xuống component cha",
              author: "Linda",
            },
            {
              id: 3,
              title: "State trong ReactJS là gì",
              content: "State giúp trữ trạng thái dữ liệu bên trong component",
              author: "David",
            }
          ],
        };
    }
  render() {
    const {products} = this.state
    return (
        <>
            <DetailPost product ={products}/>
        </>
      
    )
  }
}