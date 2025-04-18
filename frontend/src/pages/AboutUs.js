import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  aboutSection: {
    padding: '4rem 0',
  },
  teamSection: {
    padding: '4rem 0',
    backgroundColor: '#f5f5f5',
  },
  teamCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  teamImage: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    marginBottom: '1rem',
  },
});

const AboutUs = () => {
  const classes = useStyles();

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Head of Sales',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      {/* About Section */}
      <Container className={classes.aboutSection}>
        <Typography variant="h3" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Electronics Shop, your one-stop destination for all electronic appliances and gadgets. 
          We have been serving customers with quality products and excellent service since 2010.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide the best electronic appliances at competitive prices, backed by 
          exceptional customer service and after-sales support.
        </Typography>
        <Typography variant="body1" paragraph>
          We offer a wide range of products including:
        </Typography>
        <ul>
          <li>Home Appliances (Refrigerators, Washing Machines, Air Conditioners)</li>
          <li>Entertainment Systems (TVs, Sound Systems)</li>
          <li>Kitchen Appliances (Microwaves, Mixers, Food Processors)</li>
          <li>Smart Home Devices</li>
        </ul>
      </Container>

      {/* Team Section */}
      <div className={classes.teamSection}>
        <Container>
          <Typography variant="h3" gutterBottom align="center">
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
                <Card className={classes.teamCard}>
                  <CardContent>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={classes.teamImage}
                    />
                    <Typography variant="h6" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Values Section */}
      <Container className={classes.aboutSection}>
        <Typography variant="h3" gutterBottom align="center">
          Our Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Quality
                </Typography>
                <Typography variant="body1">
                  We ensure that all our products meet the highest quality standards and come with proper warranties.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Customer Service
                </Typography>
                <Typography variant="body1">
                  Our dedicated support team is always ready to assist you with any queries or concerns.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Innovation
                </Typography>
                <Typography variant="body1">
                  We constantly update our inventory with the latest technological innovations in the market.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs; 