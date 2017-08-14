/* Packages */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Component: Text Input Form
 * 
 * @param input
 * @param value
 * @param handler
 * 
 * @return Component
 */
export default class Text extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(next){
        this.setState(next)
    }
    render(){
        return <input type={this.props.input.type}
                style={this.props.style}
                name={this.props.input.name}
                value={this.props.value}
                onChange={this.props.handler} />
    }
}

/**
 * Component Type Checking 
 */
Text.propTypes = {
    value: PropTypes.node,
    handler: PropTypes.func,
    input: PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string
    }),
    style: PropTypes.shape({
        input: PropTypes.node
    })
}