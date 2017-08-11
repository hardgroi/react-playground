// Packages
import React from 'react'

// Files
import Input from '../components/Input'
import Constants from '../config/Constants.js'

const fields = [
    {
        type: Constants.InputType.TEXT,
        label: 'Text Input',
        input: {
            type: "text",
            name: 'text',
            placeHolder: ''
        },
        style:{
            input: '',
            label: ''
        }
    }, {
        type: Constants.InputType.TEXTAREA,
        label: 'Text Input',
        input: {
            name: 'textarea',
            value: 'teaxtarea',
        },
        style: {
            input: '',
            label: ''
        }
    }, {
        type: Constants.InputType.RADIO,
        label: 'Radio Input',
        input: {
            options: [
                {
                    name: 'option',
                    value: 'option1',
                    label: 'option1'
                }, {
                    name: 'option',
                    value: 'option2',
                    label: 'option2'
                }
            ]
        }
    }
]

export default class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        console.info(e.target.value)
        this.setState({value: e.target.value})
    }
    render(){
        let inputs = fields.map((field, index) => {
            return (
                <div key={index}>
                    <label>{field.label}</label>:
                    <Input type={field.type} 
                        input={field.input} 
                        value={this.state.value}
                        handler={this.handleChange}/>
                    <br/>
                </div>
            )
        })
        return(
            <div>
                { inputs }
            </div>
        )
    }
}