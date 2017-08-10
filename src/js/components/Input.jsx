// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Files
import Constants from '../config/Constants.js'

export default class Input extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        switch(this.props.type){
        case Constants.InputType.TEXT:
            return <Text input={this.props.input} />
        case Constants.InputType.RADIO:
            return <Radio input={this.props.input} />
        case Constants.InputType.DROPDOWN:
            return <Dropdown input={this.props.input}/>
        case Constants.InputType.TEXTAREA:
            return <TextArea input={this.props.input} />
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
                    value={this.props.input.value} />
    }
}

class Radio extends React.Component{
    constructor(props){
        super(props)
        this.state = { options: props.options }
    }
    componentWillReceiveProps(next){
        this.setState(next)
    }
    render(){
        console.info(this.props.props)
        let options = this.state.options.map((option, index) => {
            return (
                <span key={index}>
                    <input type="radio"
                    name={option.name}
                    value={option.value}
                    onChange={this.props.handler}/>
                    <label>{option.label}</label>
                </span>
            )
        })
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
        return <textarea />
    }
}

class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {options: props.options}
    }
    componentWillReceiveProps(next){
        this.setState(next)
    }
    render(){
        let options = this.state.options.map((option, index) => {
            return  <option key={index}
                      value={option[this.props.value]}
                      style={this.props.style.option}>
                        {option[this.props.label]}
                    </option>
        })
        return(
            <select name={this.props.name} 
              onChange={this.props.handler}
              value={this.props.selectedValue}>
                <option value="" style={this.props.style.option}></option>
                {options}
            </select>
        )
    }
}