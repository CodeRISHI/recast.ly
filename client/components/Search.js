var Search = (prop) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={prop.liveSearch.bind(prop.that, $('input').val())} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
