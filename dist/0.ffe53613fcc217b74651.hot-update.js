webpackHotUpdate(0,{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(49);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(188);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constants = __webpack_require__(186);

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Packages


// Files


var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            switch (this.props.type) {
                case _Constants2.default.InputType.TEXT:
                    return _react2.default.createElement(Text, { props: this.props.input });
                case _Constants2.default.InputType.RADIO:
                    return _react2.default.createElement(Radio, { options: this.props.input });
                case _Constants2.default.InputType.TEXTAREA:
                    return _react2.default.createElement(TextArea, { props: this.props.input });
                default:
                    console.error(this.props.type + ' does not have a case');
            }
        }
    }]);

    return Input;
}(_react2.default.Component);

exports.default = Input;


Input.propTypes = {
    type: _propTypes2.default.string,
    info: _propTypes2.default.node
};

var Text = function (_React$Component2) {
    _inherits(Text, _React$Component2);

    function Text(props) {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));
    }

    _createClass(Text, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            this.setState(next);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('input', { type: this.props.type,
                name: this.props.name,
                value: this.props.value });
        }
    }]);

    return Text;
}(_react2.default.Component);

var Radio = function (_React$Component3) {
    _inherits(Radio, _React$Component3);

    function Radio(props) {
        _classCallCheck(this, Radio);

        var _this3 = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

        _this3.state = { checked: true };
        return _this3;
    }

    _createClass(Radio, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            this.setState(next);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var options = this.props.options.map(function (option, index) {
                return _react2.default.createElement(
                    'span',
                    { key: index },
                    _react2.default.createElement('input', { type: 'radio',
                        name: option.name,
                        value: option.value,
                        onChange: _this4.props.handler }),
                    _react2.default.createElement(
                        'label',
                        { style: option.style.label },
                        option.label
                    )
                );
            }, this);
            return _react2.default.createElement(
                'div',
                null,
                options
            );
        }
    }]);

    return Radio;
}(_react2.default.Component);

var TextArea = function (_React$Component4) {
    _inherits(TextArea, _React$Component4);

    function TextArea(props) {
        _classCallCheck(this, TextArea);

        return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));
    }

    _createClass(TextArea, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('textarea', null);
        }
    }]);

    return TextArea;
}(_react2.default.Component);

/***/ })

})