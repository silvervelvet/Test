import UICardStatus from '../UI-kit/UICardStatus/UICardStatus';
import styles from './CommandCard.module.css';
import command_icon from './img/command_icon.png';

const CommandCard = () => {
  return (
    <section className={styles.card_container}>
      <div className={styles.command}>
        <img
          src={command_icon}
          className={styles.command_icon}
          alt="command_icon"
        />
        <div>Command №1</div>
      </div>
      <div className={styles.command_status_container}>
        <div className={styles.score}>2 : 1</div>
        <UICardStatus />
      </div>
      <div className={styles.command}>
        <div>Command №2</div>
        <img
          src={command_icon}
          className={styles.command_icon}
          alt="command_icon"
        />
      </div>
    </section>
  );
};

export default CommandCard;
