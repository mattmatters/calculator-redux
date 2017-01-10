import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { editItem, viewList, newItem, selectItem } from '../actions/index';

const mapStateToProps = state => ({
  view: state.itemReducer.view,
  edit: state.itemReducer.edit,
  items: state.itemReducer.items,
});

const mapDispatchToProps = dispatch => ({
  viewAll: () => dispatch(viewList()),
  editItem: itemId => dispatch(editItem(itemId)),
  newItem: () => dispatch(newItem()),
  selectItem: itemId => dispatch(selectItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
