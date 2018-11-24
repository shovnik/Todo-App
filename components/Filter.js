import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/filter';
import { Container, FilterContainer, FilterText } from '../styles';

class Filter extends React.Component {
  render() {
    return (
      <Container>
        <FilterContainer isActive={this.props.filter === 'ALL'} onPress={() => this.props.setFilter('ALL')}>
          <FilterText>All</FilterText>
        </FilterContainer>
        <FilterContainer isActive={this.props.filter === 'INCOMPLETE'} onPress={() => this.props.setFilter('INCOMPLETE')}>
          <FilterText>Incomplete</FilterText>
        </FilterContainer>
        <FilterContainer isActive={this.props.filter === 'COMPLETE'}  onPress={() => this.props.setFilter('COMPLETE')}>
          <FilterText>Complete</FilterText>
        </FilterContainer>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
