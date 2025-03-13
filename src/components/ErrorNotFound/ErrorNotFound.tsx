import alert_logo from './img/alert.png';
import styles from './ErrorNotFound.module.css';

const ErrorNotFound = () => {
  return (
    <section className={styles.alert_container}>
      <img src={alert_logo} className={styles.alert_icon} alt="alert" />
      <div className={styles.alert_message}>
        Ошибка: не удалось загрузить информацию
      </div>
    </section>
  );
};

export default ErrorNotFound;
