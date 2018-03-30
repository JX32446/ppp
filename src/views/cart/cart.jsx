import React,{Component} from 'react'
import {connect} from 'react-redux'
import mapStateToProps from './state.js'
class Cart extends Component{
    render(){
        return <div>
            gouwuche
        </div>
    }
    componentDidMount(){
        console.log(this.props);
        
    }
}

export default (connect(mapStateToProps))(Cart)