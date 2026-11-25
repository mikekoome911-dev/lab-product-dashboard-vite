import React from 'react';
import { Grid, Alert } from '@mui/material';
import ProductCard from './ProductCard';

function ProductList({ products, onRemoveProduct }) {
  const hasInStockProducts = products.some((product) => product.inStock);

  return (
    <>
      {!hasInStockProducts && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          No products are currently in stock.
        </Alert>
      )}

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              product={product}
              onRemove={() => onRemoveProduct(product.id)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
