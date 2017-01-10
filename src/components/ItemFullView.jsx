import React, { PropTypes } from 'react';

const propTypes = {
  edit: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    style: PropTypes.string,
    instructions: PropTypes.string,
  }),
  submitItem: PropTypes.func,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number.isRequired,
};

// eslint-disable-next-line
const ItemFullView = ({ index, edit, item, submitItem, editItem, deleteItem }) => (
  <div>
    <div className="row">
      <div className="col-xs-8">
        <h3>{item.name}</h3>
      </div>
      <div className="col-xs-4">
        <p>{item.style}</p>
      </div>
    </div>
    <h5>Instructions</h5>
    <p>{item.instructions}</p>
    <div className="right-block">
      <button className="btn-primary">
        <i className="fa fa-wrench" aria-hidden="true" />
      </button>

      {
        edit ?
          <button className="btn-success">
            <i className="fa fa-floppy-o" aria-hidden="true" />
          </button>
             :
          <button className="btn-primary" onClick={editItem()}>
            <i className="fa fa-wrench" aria-hidden="true" />
          </button>
      }
      <button className="btn-danger">
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </div>
  </div>
);

ItemFullView.propTypes = propTypes;

export default ItemFullView;
