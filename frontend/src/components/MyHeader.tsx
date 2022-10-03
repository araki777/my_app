import { useMemo } from 'react'
import { Header, Group, ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Logo } from './_logo'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { Link } from 'react-router-dom'

export const MyHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Header height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <Link to={'/'}>
          <Logo colorScheme={colorScheme} />
        </Link>
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Header>
  )
};
