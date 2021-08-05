import { Component, h } from 'preact';
import style from './style.scss';
import MozBtn from '../mozAlike/btn';
import { Link } from 'preact-router';

interface btn {
  text: string;
  destination: string;
}

export class Card extends Component<{
  LogoComponent: any;
  Title: string;
  Description: any;
  Buttons: btn[];
}> {
  render() {
    return (
      <div class={style.Card}>
        <this.props.LogoComponent size="64px" className={style.logo} />
        <h1
          class={style.Title}
          data-isTitle={true}
          data-titleText={this.props.Title}
        >
          {this.props.Title}
        </h1>
        <p class={style.Description}>{this.props.Description}</p>
        {this.props.Buttons.map((btn: btn) => {
          return (
            <Link class={style.Button} href={btn.destination}>
              <MozBtn>{btn.text}</MozBtn>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Card;
