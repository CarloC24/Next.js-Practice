import styled from 'styled-components';
import { connect } from 'react-redux';
const Title = styled.h1`
  font-size: 4rem;
  transform: skew(-7deg);
  color: ${props => props.theme.red};
`;
const Index = props => (
  <div>
    <Title>{props.name}</Title>
  </div>
);

const mapStateToProps = state => {
  return {
    name: state.nextReducer.name
  };
};

export default connect(
  mapStateToProps,
  null
)(Index);
