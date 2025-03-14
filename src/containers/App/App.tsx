import Header from '../../components/Header/Header';
import { ErrorProvider } from '../../context/ErrorContext';
import MainPage from '../MainPage/MainPage';
import styles from './App.module.css';

function App() {
  return (
    <ErrorProvider>
      <section className={styles.wrapper}>
        <Header />
        <MainPage />
      </section>
    </ErrorProvider>
  );
}

export default App;
