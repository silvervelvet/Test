import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import logo from './img/MatchTracker.png';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ErrorNotFound />
    </header>
  );
};

export default Header;
