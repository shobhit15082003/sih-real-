
// src/SignUpCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledCard = styled(Card)({
  maxWidth: 400,
  minWidth: 500,
  minHeight: 300,
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
});

const SignUpCard = () => {
  const [role, setRole] = useState('farmer');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submission logic 
    console.log("Form submitted");
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            required
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            type="text"
            label="Password"
            variant="outlined"
            fullWidth
          />

          <FormControl component="fieldset">
            <FormLabel color='black' component="legend">Role</FormLabel>
            <RadioGroup
              name="role"
              value={role}
              onChange={handleRoleChange}
              row
            >
              <FormControlLabel value="farmer" control={<Radio color='success' />} label="Farmer" />
              <FormControlLabel value="seller" control={<Radio color='success' />} label="Seller" />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" color="success" type="submit" fullWidth>
            Sign Up
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default SignUpCard;
