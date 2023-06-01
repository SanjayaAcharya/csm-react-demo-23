import React from "react";

class ClsComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {company:"CSM"}
        console.log("Step:::constructor",this.state.company);
    }

    static getDerivedStateFromProps(props, state) {
console.log("props:::",props.test)
        console.log("Step:::getDerivedStateFromProps",state.company);
        // return {favoritecolor: props.favcol };
    }

    componentDidMount() {
        console.log("Step:::componentDidMount",this.state.company);
        this.setState({company:"My CSM"})
        console.log("Step:::1:componentDidMount",this.state.company);
    }
      
    render(){
        console.log("Step:::render",this.state.company);
        return(<h1>{this.state.company}</h1>)
    }
}
export default ClsComponent;
