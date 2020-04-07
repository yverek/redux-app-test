import { connect } from 'react-redux';
import FactsList from '../components/FactsList';

const mapStateToProps = state => {
  return {
    factsList: state.factsList
  };
};

const FactsListContainer = connect(mapStateToProps)(FactsList);

export default FactsListContainer;