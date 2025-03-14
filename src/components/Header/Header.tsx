import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import logo from './img/MatchTracker.png';
import refresh_icon from './img/refresh_icon.png';
import styles from './Header.module.css';
import { useError } from '../../context/ErrorContext'

const Header = () => {
  const { error } = useError();

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.refresh_data_panel}>
        {error && <ErrorNotFound />}
        <button className={styles.refresh_btn}>
          Обновить
          <img
            src={refresh_icon}
            className={styles.refresh_icon}
            alt="refresh_icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
