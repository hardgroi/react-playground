/* Packages */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Component: Dropdown Input Form
 * 
 * @param input
 * @param value
 * @param handler
 * 
 * @return Component
 */
export default class Dropdown extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(next){
        this.setState(next)
    }
    render(){
        let options = this.props.input.options.map((option, index) => {
            return  <option key={index}
                      value={option.value}>
                        {option.label}
                    </option>
        })
        return(
            <select name={this.props.name} 
              onChange={this.props.handler}
              value={this.props.value}>
                <option value=""></option>
                {options}
            </select>
        )
    }
}

/**
 * Components Props Type-Checking
 */
Dropdown.propTypes = {
    value: PropTypes.node,
    handler: PropTypes.func,
    input: PropTypes.shape({
        value: PropTypes.node,
        input: PropTypes.node,
        options: PropTypes.arrayOf(PropTypes.object)
    }),
    style: PropTypes.shape({
        input: PropTypes.node,
        label: PropTypes.node
    })
}