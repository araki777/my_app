import { BrowserRouter } from 'react-router-dom';
import MyAppShell from '../components/MyAppShell';
import MantineProviders from './MantineProviders';

const AppProviders = () => {
  return (
    <MantineProviders>
      <MyAppShell />
    </MantineProviders>
  )
}

export default AppProviders
