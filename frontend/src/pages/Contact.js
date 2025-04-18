import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  contactSection: {
    padding: '4rem 0',
  },
  form: {
    marginTop: '2rem',
  },
  storeInfo: {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    borderRadius: '8px',
  },
  map: {
    width: '100%',
    height: 300,
    border: 0,
    borderRadius: '8px',
  },
});

const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Container className={classes.contactSection}>
      <Typography variant="h3" gutterBottom align="center">
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ marginTop: '1rem' }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Store Information */}
        <Grid item xs={12} md={6}>
          <div className={classes.storeInfo}>
            <Typography variant="h5" gutterBottom>
              Store Information
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Address:</strong> 123 Electronics Street, City, State - 123456
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Phone:</strong> +91 1234567890
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong> info@electronicshop.com
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Working Hours:</strong>
              <br />
              Monday - Friday: 9:00 AM - 8:00 PM
              <br />
              Saturday - Sunday: 10:00 AM - 6:00 PM
            </Typography>

            {/* Map */}
            <Box mt={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890!2d77.1234567890!3d12.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className={classes.map}
                allowFullScreen=""
                loading="lazy"
                title="Store Location"
              ></iframe>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 