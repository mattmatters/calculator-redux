import React, { PropTypes } from 'react';
import Item from '../components/item';
import ListHeader from '../components/ListHeader';
import ItemFullView from '../components/ItemFullView';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    style: PropTypes.string,
  })),
  view: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  viewAll: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  newItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
};

const ItemList = ({ view, edit, items, viewAll, editItem, newItem, selectItem }) => {
  if (view === 'all') {
    return (
      <div className="container">
        <ListHeader
          view={view}
          edit={edit}
          viewAll={() => viewAll}
          newItem={() => newItem}
        />
        <ul className="center-block item-list">
          {
            items.map((item, index) =>
              <Item
                {...item}
                itemId={index}
                editItem={() => editItem(index)}
                selectItem={() => selectItem(index)}
              />)
           }
        </ul>
      </div>);
  }
  return (
    <div className="container">
      <ListHeader view={view} edit={edit} viewAll={() => viewAll} />
      <ItemFullView
        edit={edit}
        index={parseInt(view, 10)}
        item={items[parseInt(view, 10)]} // Need better interface
        editItem={id => editItem(id)}
      />
    </div>
  );
};

ItemList.propTypes = propTypes;

export default ItemList;
