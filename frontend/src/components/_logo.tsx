import { ColorScheme, Image } from '@mantine/core';
import logo from '../../assets/logo.png'

export function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
  return (
    <div style={{ width: 120, marginLeft: 'auto', marginRight: 'auto' }}>
      { colorScheme === 'dark'
        ? <Image src={logo} classNames={{ image: "invert-[.89]" }} />
        : <Image src={logo} />}
    </div>
  );
}
