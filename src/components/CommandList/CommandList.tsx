import { useEffect, useState } from 'react';
import CommandCard from '../CommandCard/CommandCard';
import styles from './CommandList.module.css';
import { useError } from '../../context/ErrorContext';

export interface Team {
  name: string;
  place: number;
  players: Array<{ kills: number; username: string }>;
  points: number;
  total_kills: number;
}

export interface Match {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: string;
  time: string;
  title: string;
}

const CommandList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { setError } = useError();

  const fetchMatches = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        'https://app.ftoyd.com/fronttemp-service/fronttemp'
      );
      const data = await response.json();

      if (data.data.matches.length === 0) {
        setMatches([]);
      } else {
        setMatches(data.data.matches);
      }

      setMatches(data.data.matches);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (matches.length === 0) {
    return <div>Нет матчей</div>;
  }

  return (
    <ul className={styles.command_list}>
      {matches.map((match, index) => (
        <li key={index}>
          <CommandCard match={match} />
        </li>
      ))}
    </ul>
  );
};

export default CommandList;
