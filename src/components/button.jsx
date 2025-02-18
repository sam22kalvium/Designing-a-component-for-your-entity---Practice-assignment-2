// write button card here

import React from 'react';

const ViewProductButton = () => {
  return (
    <button className="view-product-button" style={styles.button}>
      View Product
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    fontSize: '1em',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '12px',
  },
};

export default ViewProductButton;
