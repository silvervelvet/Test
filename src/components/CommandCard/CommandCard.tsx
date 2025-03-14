import { Match } from '../CommandList/CommandList';
import UICardStatus from '../UI-kit/UICardStatus/UICardStatus';
import styles from './CommandCard.module.css';
import command_icon from './img/command_icon.png';

interface CommandCardProps {
  match: Match;
}

const CommandCard: React.FC<CommandCardProps> = ({ match }) => {
  const { awayTeam, homeTeam, awayScore, homeScore, status } = match;

  return (
    <section className={styles.card_container}>
      <div className={styles.command}>
        <img
          src={command_icon}
          className={styles.command_icon}
          alt="command_icon"
        />
        <div>{awayTeam.name}</div>
      </div>
      <div className={styles.command_status_container}>
        <div className={styles.score}>
          {awayScore} : {homeScore}
        </div>
        <UICardStatus status={status} />
      </div>
      <div className={styles.command}>
        <div>{homeTeam.name}</div>
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
