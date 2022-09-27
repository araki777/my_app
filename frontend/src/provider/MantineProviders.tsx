import { ReactNode, useState } from 'react'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks';

const MantineProviders = ({children}: { children: ReactNode }) => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>{ children }</MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MantineProviders
