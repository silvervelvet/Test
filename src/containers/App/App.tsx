import Header from '../../components/Header/Header';
import MainPage from '../MainPage/MainPage';
import styles from './App.module.css';

function App() {
  return (
    <section className={styles.wrapper}>
      <Header />
      <MainPage />
    </section>
  );
}

export default App;
