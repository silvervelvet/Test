import styles from './UICardStatus.module.css';

interface UICardStatusProps {
  status: string;
}

const UICardStatus: React.FC<UICardStatusProps> = ({ status }) => {
  let statusText;
  let status_extra_class;

  switch (status) {
    case 'Ongoing':
      statusText = 'Live';
      status_extra_class = styles.status_ongoing;
      break;
    case 'Finished':
      statusText = 'Finished';
      status_extra_class = styles.status_finished;
      break;
    default:
      statusText = 'Match preparing';
      status_extra_class = styles.status_preparing;
  }

  return (
    <div className={`${styles.status} ${status_extra_class}`}>{statusText}</div>
  );
};

export default UICardStatus;
