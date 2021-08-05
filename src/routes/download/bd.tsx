import style from './style.scss';
import download from './download';
import { Component, h } from 'preact';

import nezukopng from './nezuko.png';
import nezukogif from './nezuko.gif';

import axios from 'axios';

class BDDlPage extends Component {
  componentDidMount() {
    document.body.classList.add(style.bddl);
    (async () => {
      const error = (e: any) => {
        console.error(e);
        const v = document.getElementById('details');
        if (v) v.innerHTML = e;
        document.body.classList.add(style.error);
      };
      try {
        const v = await axios.get(
          'https://raw.githubusercontent.com/0J3/NezukoBD/master/NezukoCord.theme.css',
        );
        download(v.data, 'NezukoCord.theme.css');
        setTimeout(() => (document.location.href = '/download/thanks'), 5000);
      } catch (e) {
        error(e);
      }
    })();
  }
  render() {
    return (
      <div>
        <div class={style.downloading}>
          <h1>
            <img src={nezukopng} class={style.round + ' ' + style.nezukopng} />
            NezukoBD should be downloading!
          </h1>
          <p>Have this gif of Nezuko while you wait!</p>
          <img src={nezukogif} alt="Nezuko_Load_Gif" />
        </div>
        <div class={style.error} hidden>
          <h1>An Error has occurred!</h1>
          <p>
            Details: <span id="details">Script failed to set details(?)</span>
          </p>
        </div>
      </div>
    );
  }
}
export default BDDlPage;
