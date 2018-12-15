import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  transform: skew(-7deg);
  color: ${props => props.theme.red};
`;
const Index = () => (
  <div>
    <Title>Welcome to BitzPrice</Title>
  </div>
);

export default Index;
