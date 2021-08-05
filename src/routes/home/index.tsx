import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <h1>NezukoCord</h1>
      <p>that one theme that every demon slayer enjoyer needs</p>
    </div>
  );
};

export default Home;
