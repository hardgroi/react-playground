// Packages
import keyMirror from 'keymirror'

export default {
    InputType: keyMirror({
        TEXT:       null,
        RADIO:      null,
        DROPDOWN:   null,
        TEXTAREA:   null
    })
}

// {
//     type: Constants.InputType.RADIO,
//     label: 'Radio Input',
//     checkedVal: '1',
//     input: {
//         options: [
//             {
//                 label: 'Radio 1',
//                 name: 'radio',
//                 value: '1',
//                 style: {
//                     input: '',
//                     label: ''
//                 }
//             }, {
//                 label: 'Radio 2',
//                 name: 'radio',
//                 value: '2',
//                 style: {
//                     input: '',
//                     label: ''
//                 }
//             }
//         ]
//     }
// }, {
//     type: Constants.InputType.DROPDOWN,
//     label: 'Dropdown',
//     selectedValue: '1',
//     value: 'value',
//     label: 'label',
//     name: 'dropdown',
//     input: {
//         options: [
//             {
//                 value: '1',
//                 label: 'Drop 1'
//             }, {
//                 value: '2',
//                 label: 'Drop 2'
//             }
//         ]
//     }
// }