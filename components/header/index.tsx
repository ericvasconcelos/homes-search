import { memo } from 'react';
import Button from '@components/button';
import Container from '@components/container';
import Logo from '@components/logo';
import Link from '@components/link';
import Icon from '@components/icon';
import Search from '@components/search';
import * as S from './header.styles';

const Header = ({ onSearch }): JSX.Element => {
  return (
    <S.Header>
      <Container>
        <S.HeaderTop>
          <Logo />

          <S.Menu>
            <Link href="/">Find Homes</Link>
            <Link href="/">Partners</Link>
            <Link href="/">Company Retreats</Link>
            <Link href="/">
              More <Icon name="ChevronDown" />
            </Link>
          </S.Menu>

          <S.Sign>
            <Link href="/">Sign In</Link>
            <Button>Sign Up</Button>
          </S.Sign>
        </S.HeaderTop>

        <Search onSearch={onSearch} />
      </Container>
    </S.Header>
  );
};

export default memo(Header);
