// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Files
import Constants from '../config/Constants.js'

export default class Input extends React.Component{
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
                        value={this.props.value}
                        handler={this.props.handler} />
        case Constants.InputType.RADIO:
            return <Radio input={this.props.input} 
                        value={this.props.value}
                        handler={this.props.handler} />
        case Constants.InputType.DROPDOWN:
            return <Dropdown input={this.props.input}
                        value={this.props.value}
                        handler={this.props.handler} />
        case Constants.InputType.TEXTAREA:
            return <TextArea input={this.props.input} 
                        value={this.props.value}
                        handler={this.props.handler}/>
        default:
            console.error(this.props.type + ' does not have a case')
        }
    }
}

class Text extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(next){
        this.setState(next)
    }
    render(){
        return <input type={this.props.input.type} 
                    name={this.props.input.name}
                    value={this.props.value}
                    onChange={this.props.handler} />
    }
}

class Radio extends React.Component{
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

class TextArea extends React.Component{
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
 * Dropdown Input - Creates a dropdown form element
 */
class Dropdown extends React.Component{
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