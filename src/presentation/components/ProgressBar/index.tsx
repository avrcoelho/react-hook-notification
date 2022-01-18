import { useEffect, useState } from 'react';
import { Container } from './styles';

interface ProgressBarProps {
  delay: number;
}

export const ProgressBar = ({ delay }: ProgressBarProps): JSX.Element => {
  const [isMount, setIsMoint] = useState(true);

  useEffect(() => {
    setIsMoint(false);
  }, []);

  return (
    <Container
      style={{
        width: `${isMount ? 100 : 0}%`,
        transition: `width ${delay}ms linear`,
      }}
    />
  );
};
