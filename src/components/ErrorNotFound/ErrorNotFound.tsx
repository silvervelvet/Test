import alert_logo from './img/alert.png';

const ErrorNotFound = () => {
  return (
    <section>
      <img src={alert_logo} alt="alert" />
      <div>Ошибка: не удалось загрузить информацию</div>
    </section>
  );
};

export default ErrorNotFound;
