import styled from 'styled-components';
import Link from 'components/common/Link';
import { ROUTE_PATH } from 'constants/route';
import { Button, Dropdown, Menu } from 'antd';

const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5px;
`;

const LeftContent = styled.div``;

const RightContent = styled.div`
  & > * + * {
    margin-left: 10px;
  }
`;

const GlobalNavigationBar = () => {
  return (
    <Conatiner>
      <LeftContent>
        <Link href={ROUTE_PATH.HOME}>
          <a>
            <Button>JEBS Admin</Button>
          </a>
        </Link>
      </LeftContent>
      <RightContent>
        <Link href="https://jebs.kr/cs/board">
          <a target="_blank" rel="noopener noreferrer">
            <Button>내부 게시판</Button>
          </a>
        </Link>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>로그아웃</Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button>최고 관리자</Button>
        </Dropdown>
      </RightContent>
    </Conatiner>
  );
};

export default GlobalNavigationBar;
