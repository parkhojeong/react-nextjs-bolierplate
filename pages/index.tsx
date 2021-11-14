import React from 'react';
import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  font-size: 30px;
  color: ${color.black};
`;

const index: React.FC = () => {
  return <Container>hello world</Container>;
};

export default index;
