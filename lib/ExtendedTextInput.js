'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtendedTextInput = function (_TextInput) {
    _inherits(ExtendedTextInput, _TextInput);

    function ExtendedTextInput() {
        _classCallCheck(this, ExtendedTextInput);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ExtendedTextInput).apply(this, arguments));
    }

    _createClass(ExtendedTextInput, [{
        key: 'focus',
        value: function focus() {
            this._component.focus();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var focus = nextProps.focus;


            focus && this.focus();
        }
    }]);

    return ExtendedTextInput;
}(_reactNative.TextInput);

exports.default = ExtendedTextInput;


ExtendedTextInput.propTypes = {
    focus: _reactNative.PropTypes.bool
};

ExtendedTextInput.defaultProps = {
    focus: false
};