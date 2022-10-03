import AppRoutes from '../router';
import MantineProviders from './MantineProviders';

const AppProviders = () => {
  return (
    <MantineProviders>
      <AppRoutes />
    </MantineProviders>
  )
}

export default AppProviders
