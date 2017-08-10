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
            value: "Text Value",
            style: '',
            placeHolder: ''
        }
    }, {
        type: Constants.InputType.TEXTAREA,
        label: 'TextArea',
        input: {
            name: 'textarea',
            value: 'teaxtarea',
            style: ''
        }
    }
]

export default class Page extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let inputs = fields.map((field, index) => {
            return (
                <div key={index}>
                    <label>{field.label}</label>:
                    <Input type={field.type} input={field.input}/>
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