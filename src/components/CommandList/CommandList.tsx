import CommandCard from '../CommandCard/CommandCard';
import styles from './CommandList.module.css';

const CommandList = () => {
  return (
    <section className={styles.command_list}>
      <CommandCard />
      <CommandCard />
    </section>
  );
};

export default CommandList;
