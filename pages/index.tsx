import React from 'react';
import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  font-size: 30px;
  color: ${color.black};
`;

const index: React.FC = () => {
  return <Container>관리자 Main</Container>;
};

export default index;
