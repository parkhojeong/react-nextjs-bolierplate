import { Collapse } from 'antd';
import { Panel } from 'rc-collapse';
import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

type SideBarProp = ComponentPropsWithoutRef<'div'>;

const SideBar = ({ ...restProps }: SideBarProp) => {
  return (
    <Container {...restProps}>
      <Collapse accordion>
        <Panel header="Jebs" key="1">
          <p>회원관리</p>
        </Panel>
        <Panel header="Course" key="2">
          <p>course</p>
        </Panel>
      </Collapse>
    </Container>
  );
};

export default SideBar;
