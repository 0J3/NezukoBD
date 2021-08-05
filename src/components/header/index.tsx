import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header: FunctionalComponent = () => {
  return (
    <header
      class={
        style.header +
        ' ' +
        (style['bg-' + Math.floor(Math.random() * 4 + 1)] ?? style['bg-1'])
      }
    >
      <h1>NezukoCord</h1>
      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
        <Link activeClassName={style.active} href="/downloads">
          Downloads
        </Link>
      </nav>
    </header>
  );
};

export default Header;
