import React, { PropTypes } from 'react';

const propTypes = {
  view: PropTypes.string,
  edit: PropTypes.bool,
  viewAll: PropTypes.func,
  newItem: PropTypes.func,
};

const ListHeader = ({ viewAll, view, edit, newItem }) => (
  <div className="list-header row">
    <div className="col-xs-8">
      <h3> {view === 'all' ? 'Beer Recipes' : 'View Recipe'} </h3>
      {edit ? <p>edit</p> : ''}
    </div>
    <div className="col-xs-2">
      <button className="btn-info" onClick={viewAll()}>
        <i className="fa fa-arrow-left" aria-hidden="true" />
      </button>
    </div>
    <div className="col-xs-2">
      {
        view === 'all' ? <button className="btn-primary" onClick={newItem()}><i className="fa fa-plus-circle" aria-hidden="true" /></button>
                       : <button className="btn-success">
                         <i className="fa fa-floppy-o" aria-hidden="true" />
                       </button>
      }
    </div>
  </div>
);

ListHeader.propTypes = propTypes;

export default ListHeader;
