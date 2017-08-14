// Packages
import React from 'react'

// Files
import Constants from '../config/Constants.js'
import Fields from './Page.fields.js'

// Components
import Input from '../components/Input/main'

/**
 * View Component
 */
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
        let inputs = Fields.map((field, index) => {
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