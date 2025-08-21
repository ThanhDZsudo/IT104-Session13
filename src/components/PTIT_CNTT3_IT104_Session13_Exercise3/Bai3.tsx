import { Component } from 'react'
type PropType = {age?:number}
type stateType = {
    users: user[];
}
type  user = {
        id :number,
        name: string,
        age: number
    } 

export default class Exercise03 extends Component<PropType,stateType> {
    constructor(props:PropType){
        super(props)
        this.state = {
          users: [
            { id: 1, name: "john", age: 30 },
            { id: 2, name: "mary", age: 25 },
            { id: 3, name: "jane", age: 20 },
          ],
        };
    }
  render() {
    return (
      <>
        <table border={1} cellPadding={10}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    )
  }
}