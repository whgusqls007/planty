const ListIndex = ({ currentPage }) => {
  return (
    <div
      className="page-index"
      style={currentPage === 2 ? { marginBottom: '10%' } : {}}
    >
      <ul>
        <li className={currentPage === 1 ? 'list-active' : ''}></li>
        <li className={currentPage === 2 ? 'list-active' : ''}></li>
        <li className={currentPage === 4 ? 'list-active' : ''}></li>
        <li className={currentPage === 6 ? 'list-active' : ''}></li>
      </ul>
    </div>
  );
};

export default ListIndex;
