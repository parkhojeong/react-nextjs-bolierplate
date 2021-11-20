import { ComponentPropsWithoutRef } from 'react';
import GlobalNavigationBar from 'components/common/GlobalNavigationBar';
import SideBar from 'components/common/SideBar';
import styled from 'styled-components';

const Container = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
`;

type DefaultLayoutProp = ComponentPropsWithoutRef<'div'>;

const DefaultLayout = ({ children, ...restProps }: DefaultLayoutProp) => {
  return (
    <Container {...restProps}>
      <GlobalNavigationBar />
      <ContentWrapper>
        <SideBar />
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default DefaultLayout;
