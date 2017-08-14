/* Packages */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Component: TextArea Input Form
 * 
 * @param input
 * @param value
 * @param handler
 * 
 * @return Component
 */
export default class TextArea extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(next){
        this.setState(next)
    }
    render(){
        return <textarea 
                value={this.props.value} 
                onChange={this.props.handler}/>
    }
}

/**
 * Component Type Checking
 */
TextArea.propTypes = {
    value: PropTypes.node,
    handler: PropTypes.func,
    input: PropTypes.shape({
        name: PropTypes.string
    }),
    style: PropTypes.shape({
        input: PropTypes.node
    })
}