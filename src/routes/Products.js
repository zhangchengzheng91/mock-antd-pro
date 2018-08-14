import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd'
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  function addProduct() {
    dispatch({
      type: 'products/add',
      data: {
        name: 'text',
        id: 3
      }
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <Button onClick={addProduct}>add product</Button>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
