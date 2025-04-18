import React from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hero: {
    background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
    color: 'white',
    padding: '4rem 0',
    textAlign: 'center',
  },
  featuredProducts: {
    padding: '4rem 0',
  },
  productCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  productImage: {
    height: 200,
    objectFit: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#f44336',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
  },
});

const Home = () => {
  const classes = useStyles();

  const featuredProducts = [
    {
      id: 1,
      name: 'Smart TV 55" 4K',
      price: 49999,
      discount: 20,
      image: 'https://via.placeholder.com/300x200',
      description: 'Ultra HD Smart TV with HDR',
    },
    {
      id: 2,
      name: 'Refrigerator 300L',
      price: 34999,
      discount: 15,
      image: 'https://via.placeholder.com/300x200',
      description: 'Frost-free refrigerator with smart features',
    },
    {
      id: 3,
      name: 'Washing Machine 8kg',
      price: 24999,
      discount: 10,
      image: 'https://via.placeholder.com/300x200',
      description: 'Fully automatic front load washing machine',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className={classes.hero}>
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Electronics Shop
          </Typography>
          <Typography variant="h5" gutterBottom>
            Best Deals on Electronics and Appliances
          </Typography>
          <Button variant="contained" color="secondary" size="large" style={{ marginTop: '2rem' }}>
            Shop Now
          </Button>
        </Container>
      </div>

      {/* Featured Products */}
      <Container className={classes.featuredProducts}>
        <Typography variant="h4" gutterBottom align="center">
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className={classes.productCard}>
                <Box position="relative">
                  <CardMedia
                    className={classes.productImage}
                    component="img"
                    image={product.image}
                    alt={product.name}
                  />
                  <div className={classes.discountBadge}>
                    {product.discount}% OFF
                  </div>
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {product.description}
                  </Typography>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" color="primary">
                      ₹{product.price - (product.price * product.discount) / 100}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ textDecoration: 'line-through' }}>
                      ₹{product.price}
                    </Typography>
                  </Box>
                  <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home; 