import { ComponentPropsWithoutRef } from 'react';
import GlobalNavigationBar from 'components/common/GlobalNavigationBar';
import SideBar from 'components/common/SideBar';
import styled from 'styled-components';

const Container = styled.div``;

const StyledSideBar = styled(SideBar)`
  min-width: 200px;
`;

const ContentWrapper = styled.div`
  display: flex;

  & > * + * {
    margin-left: 20px;
  }
`;

type DefaultLayoutProp = ComponentPropsWithoutRef<'div'>;

const DefaultLayout = ({ children, ...restProps }: DefaultLayoutProp) => {
  return (
    <Container {...restProps}>
      <GlobalNavigationBar />
      <ContentWrapper>
        <StyledSideBar />
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default DefaultLayout;
