import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product, onRemove }) {
  const { name, price, inStock } = product;

  const cardClasses = inStock
    ? styles.card
    : `${styles.card} ${styles.outOfStockClass} outOfStockClass`;

  return (
    <div className={cardClasses}>
      <Typography variant="h6" component="h2">
        {name}
      </Typography>

      <p className={styles.price}>{price}</p>

      <Typography
        variant="body2"
        color={inStock ? 'success.main' : 'error.main'}
        fontWeight="medium"
      >
        {inStock ? 'In Stock' : 'Out of Stock'}
      </Typography>

      <Button
        variant="outlined"
        color="error"
        onClick={onRemove}
        sx={{
          mt: 1,
          textTransform: 'none',
          borderRadius: '8px',
        }}
      >
        Remove
      </Button>
    </div>
  );
}

export default ProductCard;
