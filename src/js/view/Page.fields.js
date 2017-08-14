/* Packages */
import Constants from '../config/Constants'

export default [
    {
        type: Constants.InputType.TEXT,
        label: 'Text Input',
        input: {
            type: 'text',
            name: 'text',
            placeHolder: '',
        },
        style: {
            input: '',
        }
    }, {
        type: Constants.InputType.TEXTAREA,
        label: 'Text Input',
        input: {
            name: 'textarea',
        },
        style: {
            input: '',
        }
    }, {
        type: Constants.InputType.RADIO,
        label: 'Radio Input',
        input: {
            name: '',
            options: [
                {
                    value: 'option1',
                    label: 'option1'
                }, {
                    value: 'option2',
                    label: 'option2'
                }
            ]
        },
        style: {
            input: '',
            label: ''
        },
    }, {
        type: Constants.InputType.DROPDOWN,
        label: 'Dropdown',
        input: {
            value: undefined,
            input: undefined,
            options: [
                {
                    value: 'dropdown1',
                    label: 'dropdown1'
                }, {
                    value: 'dropdown2',
                    label: 'dropdown2'
                }
            ]
        },
        style: {
            input: '',
            label: ''
        }
    }
]