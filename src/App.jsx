import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Product Dashboard
        </Typography>
      </Box>

      <ProductList
        products={products}
        onRemoveProduct={handleRemoveProduct}
      />
    </Container>
  );
}

export default App;
