import { Component } from 'react'
type propsType={
    age?:number
}
type stateType ={
   theme:string,
   language: string
}
export default class DrakLight extends Component<propsType,stateType> {
    constructor(props:propsType){
        super(props)
        this.state={
            theme: "light",
            language: "vietnamese"
        }
    }
  render() {
    const {theme,language} = this.state;
    const backgroundStyle = {
      backgroundColor: theme === "dark" ? "black" : "white",
      color: theme === "dark" ? "white" : "black",
      padding: "20px",
      border: "1px solid gray",
      marginTop: "20px",
    };
    const themLable = theme === "dark" ? "Tối": "Sáng"
    const languageLable = language === "vietnamese" ? "Tiếng Việt" : "English"
    return (
      <div style={backgroundStyle}>
        <h2>Nền: {themLable}</h2>
        <h2>Ngôn ngữ: {languageLable}</h2>
      </div>
    )
  }
}