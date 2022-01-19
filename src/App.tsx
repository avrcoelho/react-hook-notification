import { globalStyles } from '@/presentation/assets/styles/global';
import '@/main';
import { Container } from '@/presentation/components/Container';

export const App = (): JSX.Element => {
  globalStyles();

  return <Container />;
};
