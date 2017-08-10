webpackHotUpdate(0,{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(49);

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(185);

var _Input2 = _interopRequireDefault(_Input);

var _Constants = __webpack_require__(186);

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Packages


// Files


var fields = [{
    type: _Constants2.default.InputType.TEXT,
    label: 'Text Input',
    input: {
        type: "text",
        name: 'text',
        value: "Text Value",
        style: '',
        placeHolder: ''
    }
}, {
    type: _Constants2.default.InputType.RADIO,
    label: 'Radio Input',
    checkedVal: '1',
    input: [{
        label: 'Radio 1',
        name: 'radio',
        value: '1',
        style: {
            input: '',
            label: ''
        }
    }, {
        label: 'Radio 2',
        name: 'radio',
        value: '2',
        style: {
            input: '',
            label: ''
        }
    }]
}, {
    type: _Constants2.default.InputType.TEXTAREA,
    label: 'TextArea',
    input: {
        name: 'textarea',
        value: 'teaxtarea',
        style: ''
    }
}];

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(props) {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
    }

    _createClass(Page, [{
        key: 'render',
        value: function render() {
            var inputs = fields.map(function (field, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(
                        'label',
                        null,
                        field.label
                    ),
                    _react2.default.createElement(_Input2.default, { type: field.type, input: field.input })
                );
            });
            return _react2.default.createElement(
                'div',
                null,
                inputs
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ })

})