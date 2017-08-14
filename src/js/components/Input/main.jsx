/* Packages */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

/* Files */
import Constants from '../../config/Constants.js'

/* Components */
import Text from './Input_Text'
import TextArea from './Input_TextArea'
import Radio from './Input_Radio'
import Dropdown from './Input_Dropdown'

/**
 * Component: Main Input
 * 
 * @param input
 * @param value
 * @param handler
 */
export default class Input extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(next){
        this.setState({next})
    }
    render(){
        switch(this.props.type){
        case Constants.InputType.TEXT:
            return <Text input={this.props.input}
                        style={this.props.style}
                        value={this.props.value}
                        handler={this.props.handler} />
        case Constants.InputType.RADIO:
            return <Radio input={this.props.input} 
                        style={this.props.style}
                        value={this.props.value}
                        handler={this.props.handler} />
        case Constants.InputType.DROPDOWN:
            return <Dropdown input={this.props.input}
                        style={this.props.style}
                        value={this.props.value}
                        handler={this.props.handler} />
        case Constants.InputType.TEXTAREA:
            return <TextArea input={this.props.input}
                        style={this.props.style}
                        value={this.props.value}
                        handler={this.props.handler} />
        default:
            console.error(this.props.type + ' does not have a case')
        }
    }
}

/**
 * Component Type Checking
 */
Input.propTypes = {
    input:      PropTypes.object,
    style:      PropTypes.object,
    value:      PropTypes.node,
    handler:    PropTypes.func
}