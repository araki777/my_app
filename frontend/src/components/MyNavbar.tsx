import { Navbar, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

export const MyNavbar = () => {
  const location = useLocation();
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
        <NavLink label="upload" component={Link} to="/upload" active={location.pathname === '/upload'}></NavLink>
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <NavLink label="File Table" component={Link} to="/file_table" active={location.pathname === '/file_table'}></NavLink>
      </Navbar.Section>
      <Navbar.Section>
      </Navbar.Section>
    </Navbar>
  )
}
