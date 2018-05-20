'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QRcode = function (_React$Component) {
  _inherits(QRcode, _React$Component);

  function QRcode(props) {
    _classCallCheck(this, QRcode);

    var _this = _possibleConstructorReturn(this, (QRcode.__proto__ || Object.getPrototypeOf(QRcode)).call(this, props));

    _this.handleClick = function (e) {
      var iframeId = _this.props.iframeId;

      e.nativeEvent.stopImmediatePropagation();
      _this.setState({
        qrShow: !_this.state.qrShow
      });
      document.onclick = function () {
        _this.setState({
          qrShow: false
        });
      };
      if (iframeId) {
        document.getElementById(iframeId) && document.getElementById(iframeId).contentDocument.addEventListener('click', function () {
          _this.setState({
            qrShow: false
          });
        });
      }
    };

    _this.state = {
      qrShow: false
    };
    return _this;
  }

  _createClass(QRcode, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var qrShow = this.state.qrShow;
      var _props = this.props,
          qrCodeUrl = _props.qrCodeUrl,
          logoUrl = _props.logoUrl;

      return _react2.default.createElement(
        'div',
        { className: 'qr' },
        _react2.default.createElement(
          'div',
          { className: 'qr-part' },
          _react2.default.createElement(
            'div',
            { className: 'qr-icon' },
            _react2.default.createElement('i', { className: 'fa fa-comments' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'qr-text', onClick: function onClick(e) {
                return _this2.handleClick(e);
              } },
            _react2.default.createElement(
              'p',
              { className: 'qr-text-p' },
              '\u52A0\u7528\u6237\u7FA4'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'qr-code ' + (qrShow ? 'imgShow' : 'imgHide') },
          _react2.default.createElement(
            'div',
            { className: 'qr-code-img' },
            _react2.default.createElement('img', { src: qrCodeUrl, alt: '\u7FA4\u4E8C\u7EF4\u7801' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { className: 'qr-ding-icon', src: logoUrl, alt: '' }),
            '\u626B\u4E00\u626B\u9489\u9489\u4E8C\u7EF4\u7801'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u7ACB\u5373\u52A0\u5165\u7528\u6237\u7FA4'
          )
        )
      );
    }
  }]);

  return QRcode;
}(_react2.default.Component);

QRcode.defaultProps = {
  iframeId: '',
  qrCodeUrl: '',
  logoUrl: ''
  // qrCodeUrl: '//dpubstatic.udache.com/static/dpubimg/39377/Hk6EEzh0G.png',
  // logoUrl: '//dpubstatic.udache.com/static/dpubimg/39377/B1qBEMnAf.png',
};
QRcode.propTypes = {
  iframeId: _propTypes2.default.string,
  qrCodeUrl: _propTypes2.default.string,
  logoUrl: _propTypes2.default.string
};
exports.default = QRcode;