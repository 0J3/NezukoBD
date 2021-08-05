import style from './style.scss';
import { Component, h } from 'preact';

import nezukopng from './nezuko.png';
import nezukogif from './nezuko.gif';
import BDLogo from '../../components/Icons/BD';
import PCLogo from '../../components/Icons/PC';
import Card from '../../components/card';

class Downloads extends Component {
  componentWillMount() {
    document.body.classList.add(style.dlList);
  }
  componentWillUnmount() {
    document.body.classList.remove(style.dlList);
  }
  render() {
    return (
      <div>
        <div class={style.downloading}>
          <h1>
            <img src={nezukopng} class={style.round + ' ' + style.nezukopng} />
            NezukoCord Downloads
          </h1>
          <p>
            Here, you can find downloads for NezukoBD (
            <a target="_blank" href="https://betterdiscord.app">
              BetterDiscord
            </a>
            ) and NezukoPC (
            <a target="_blank" href="https://powercord.dev">
              Powercord
            </a>
            ), aswell as their .gpg signatures.
          </p>
          {/* <img src={nezukogif} alt="Nezuko_Load_Gif" /> */}
          <div class={style.dls}>
            <Card
              LogoComponent={BDLogo}
              Title={'BetterDiscord'}
              Description={
                <span>
                  No Description Provided
                  <br />
                  This is <b>NOT</b> a bug; I'm just lazy
                </span>
              }
              Buttons={[
                {
                  text: 'Download',
                  destination: '/download',
                },
              ]}
            />
            <Card
              LogoComponent={PCLogo}
              Title={'Powercord'}
              Description={
                <span>
                  No Description Provided
                  <br />
                  This is <b>NOT</b> a bug; I'm just lazy
                </span>
              }
              Buttons={[
                {
                  text: 'Download',
                  destination: '/download/pc',
                },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Downloads;
