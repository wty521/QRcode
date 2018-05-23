import React from 'react';
import PropTypes from 'prop-types';

export default class QRcode extends React.Component {
  static defaultProps = {
    iframeId: '',
    qrCodeUrl: '',
    logoUrl: '',
    iconClassName: '',
    imgClassName: '',
    // qrCodeUrl: '//dpubstatic.udache.com/static/dpubimg/39377/Hk6EEzh0G.png',
    // logoUrl: '//dpubstatic.udache.com/static/dpubimg/39377/B1qBEMnAf.png',
  }
  static propTypes = {
    iframeId: PropTypes.string,
    qrCodeUrl: PropTypes.string,
    logoUrl: PropTypes.string,
    iconClassName: PropTypes.string,
    imgClassName: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      qrShow: false,
    };
  }

  handleClick= (e) => {
    const { iframeId } = this.props;
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      qrShow: !this.state.qrShow,
    });
    document.onclick = () => {
      this.setState({
        qrShow: false,
      });
    };
    if (iframeId) {
      document.getElementById(iframeId) && document.getElementById(iframeId).contentDocument.addEventListener('click', () => {
        this.setState({
          qrShow: false,
        });
      });
    }
  }
  render() {
    const { qrShow } = this.state;
    const {
      qrCodeUrl,
      logoUrl,
      iconClassName,
      imgClassName,
    } = this.props;
    return (
      <div className="qr">
        <div className={`qr-part ${iconClassName}`} >
          <div className="qr-icon" >
            <i className="fa fa-comments" />
          </div>
          <div className="qr-text" onClick={e => this.handleClick(e)}>
            <p className="qr-text-p">加用户群</p>
          </div>
        </div>
        <div className={`qr-code ${qrShow ? 'imgShow' : 'imgHide'} ${imgClassName}`}>
          <div className="qr-code-img">
            <img src={qrCodeUrl} alt="群二维码" />
          </div>
          <p><img className="qr-ding-icon" src={logoUrl} alt="" />扫一扫钉钉二维码</p>
          <p>立即加入用户群</p>
        </div>
      </div>
    );
  }
}
