/* Packages */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Component: Radio Input Form
 * 
 * @param input
 * @param value
 * @param handler
 * 
 * @return Component
 */
export default class Radio extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(next){
        this.setState(next)
    }
    render(){
        let options = this.props.input.options.map((option, index) => {
            return (
                <span key={index}>
                    <input type="radio"
                    name={this.props.input.name}
                    checked={(this.props.value === option.value) ? true : false}
                    value={option.value}
                    onChange={this.props.handler}/>
                    <label>
                        {option.label}
                    </label>
                </span>
            )
        }, this)
        return (
            <div>
                { options }
            </div>
        )
    }
}

/**
 * Component Props Type-Checking
 */
Radio.propTypes = {
    value: PropTypes.node,
    hanlder: PropTypes.func,
    style: PropTypes.shape({
        input: PropTypes.node,
        label: PropTypes.node
    }),
    input: PropTypes.shape({
        name: PropTypes.string,
        optione: PropTypes.arrayOf(PropTypes.object)
    })
}