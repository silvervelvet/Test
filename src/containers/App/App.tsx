import Header from '../../components/Header/Header';
import { ErrorProvider } from '../../context/ErrorContext';
import MainPage from '../MainPage/MainPage';
import styles from './App.module.css';

const App: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ErrorProvider>
      <section className={styles.wrapper}>
        <Header onRefresh={handleRefresh} />
        <MainPage />
      </section>
    </ErrorProvider>
  );
};

export default App;
