import style from './style.scss';
import { Component, h } from 'preact';

import nezukopng from './nezuko.png';
import nezukogif from './nezuko.gif';

class DlThanks extends Component<{
  type?: string;
}> {
  componentWillMount() {
    document.body.classList.add(style.bddl);
  }
  render() {
    return (
      <div>
        <div class={style.downloading}>
          <h1>
            <img src={nezukopng} class={style.round + ' ' + style.nezukopng} />
            Thanks!
          </h1>
          <p>Thanks for downloading Nezuko{this.props.type ?? 'BD'}!</p>
          <img src={nezukogif} alt="Nezuko_Load_Gif" />
          <br />
          <small>
            Did your download fail? Click{' '}
            <a
              href={
                (this.props.type ?? 'BD') === 'BD'
                  ? 'https://0j3.github.io/NezukoBD/NezukoCord.theme.css'
                  : 'https://github.com/0J3/NezukoBD/raw/master/download/pc/NezukoBD.zip'
              }
              id="l"
            >
              here
            </a>
            , then press CTRL+S to manually download Nezuko
            {this.props.type ?? 'BD'}
          </small>
          <br />
          <small>
            Want to check the authenticity of the downloaded theme file?{' '}
            {this.props.type ?? 'BD' == 'BD' ? (
              <span>
                You can find the signature for the .CSS file{' '}
                <a
                  href="https://0j3.github.io/NezukoBD/NezukoCord.theme.css.gpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </span>
            ) : (
              <span>
                You can find the signature for the .ZIP file{' '}
                <a
                  href="https://github.com/0J3/NezukoBD/raw/master/download/pc/NezukoBD.zip.gpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </span>
            )}
            {' - '}
            You can find my (0J3)'s PGP Key{' '}
            <a
              href="https://nora.lgbt/gpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </small>
        </div>
      </div>
    );
  }
}
export default DlThanks;
