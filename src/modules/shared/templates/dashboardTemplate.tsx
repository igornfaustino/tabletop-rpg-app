import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: red;
`;

const dashboardTemplate: React.FC = (props) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

export default dashboardTemplate;
