const Item_list = ({ items }) => {
    return (
      <>
        {items.length > 0 ? (
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">No items yet. Add some!</p>
        )}
      </>
    );
  };
  
  export default Item_list;