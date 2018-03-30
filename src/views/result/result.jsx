import React,{Component} from 'react'

class Result extends Component{
    render(){
        return <div>滴滴</div>
    }
    componentDidMount(){
        let {location} = this.props
    }
}

export default Result