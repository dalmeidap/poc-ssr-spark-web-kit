import styled from 'styled-components';
import { Button } from 'octane-common-ui';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <Title>Server Side Rendering</Title>
      <Button endIcon="uiPlus">Testing Button</Button>
    </div>
  );
}
