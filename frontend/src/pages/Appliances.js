import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  productsSection: {
    padding: '4rem 0',
  },
  filterSection: {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
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
  offerChip: {
    margin: '0.5rem',
  },
});

const Appliances = () => {
  const classes = useStyles();
  const [bookingDialog, setBookingDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    brand: '',
  });

  const products = [
    {
      id: 1,
      name: 'Smart TV 55" 4K',
      price: 49999,
      discount: 20,
      category: 'Television',
      brand: 'Samsung',
      image: 'https://via.placeholder.com/300x200',
      description: 'Ultra HD Smart TV with HDR',
      offers: ['Free Installation', '5 Years Warranty'],
      stock: 10,
    },
    {
      id: 2,
      name: 'Refrigerator 300L',
      price: 34999,
      discount: 15,
      category: 'Refrigerator',
      brand: 'LG',
      image: 'https://via.placeholder.com/300x200',
      description: 'Frost-free refrigerator with smart features',
      offers: ['Free Delivery', '7 Years Warranty'],
      stock: 5,
    },
    {
      id: 3,
      name: 'Washing Machine 8kg',
      price: 24999,
      discount: 10,
      category: 'Washing Machine',
      brand: 'Whirlpool',
      image: 'https://via.placeholder.com/300x200',
      description: 'Fully automatic front load washing machine',
      offers: ['Free Installation', '5 Years Warranty'],
      stock: 8,
    },
  ];

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingClick = (product) => {
    setSelectedProduct(product);
    setBookingDialog(true);
  };

  const handleBookingSubmit = () => {
    // Handle booking submission
    console.log('Booking submitted for:', selectedProduct);
    setBookingDialog(false);
  };

  const filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (product.price < min || product.price > max) return false;
    }
    return true;
  });

  return (
    <Container className={classes.productsSection}>
      <Typography variant="h3" gutterBottom align="center">
        Our Appliances
      </Typography>

      {/* Filters */}
      <div className={classes.filterSection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Television">Television</MenuItem>
                <MenuItem value="Refrigerator">Refrigerator</MenuItem>
                <MenuItem value="Washing Machine">Washing Machine</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Price Range</InputLabel>
              <Select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
              >
                <MenuItem value="">All Prices</MenuItem>
                <MenuItem value="0-20000">Under ₹20,000</MenuItem>
                <MenuItem value="20000-40000">₹20,000 - ₹40,000</MenuItem>
                <MenuItem value="40000-60000">₹40,000 - ₹60,000</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Brand</InputLabel>
              <Select
                name="brand"
                value={filters.brand}
                onChange={handleFilterChange}
              >
                <MenuItem value="">All Brands</MenuItem>
                <MenuItem value="Samsung">Samsung</MenuItem>
                <MenuItem value="LG">LG</MenuItem>
                <MenuItem value="Whirlpool">Whirlpool</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>

      {/* Products Grid */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
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
                <Box mt={1}>
                  {product.offers.map((offer, index) => (
                    <Chip
                      key={index}
                      label={offer}
                      color="primary"
                      size="small"
                      className={classes.offerChip}
                    />
                  ))}
                </Box>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleBookingClick(product)}
                  >
                    Book Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Booking Dialog */}
      <Dialog open={bookingDialog} onClose={() => setBookingDialog(false)}>
        <DialogTitle>Book {selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <Box mt={2}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Address"
              multiline
              rows={3}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Preferred Delivery Date"
              type="date"
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBookingDialog(false)}>Cancel</Button>
          <Button onClick={handleBookingSubmit} variant="contained" color="primary">
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Appliances; 