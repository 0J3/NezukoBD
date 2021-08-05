import { Component, h } from 'preact';
import style from './PC.scss';

export default class PCLogo extends Component<{
  className?: string;
  size?: string;
}> {
  render() {
    let logo =
      style[
        `logo_${Math.floor(Math.random() * 15 + 1) < 9 ? 'normal' : 'fun'}`
      ];
    return (
      <div
        className={`pc-logo ${logo} ${this.props.className}`.trim()}
        height="100%"
        width={this.props.size || '16px'}
      ></div>
    );
  }
}
