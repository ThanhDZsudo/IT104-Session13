import { Component } from 'react'

type Product = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type PropType = {
  product: Product[];
};
export default class DetailPost extends Component<PropType> {
  render() {
    return (
      <>
      <h3>Danh sách bài viết</h3>
      {this.props.product.map((item)=>(
        <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <small>{item.author}</small>
        </div>
      ))}
      </>
    )
  }
}