var Nav = (prop) => {
  return (
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search liveSearch={prop.liveSearch} that={prop.that} />
      </div>
    </nav>
  );
};
window.Nav = Nav;
