import React, { useState } from "react";
import { TextField, Button, Container, Grid, Box } from "@mui/material";

const Forms = ({ name = "", email = "", mob = "", add = "" }) => {
  // State variables to store form data and validation errors
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    mobile: mob,
    address: add,
  });
  const [errors, setErrors] = useState({ email: "", mobile: "" });

  // Function to handle input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation errors when input changes
    setErrors({ ...errors, [name]: "" });
  };

  // Function to validate form fields
  const validateForm = () => {
    const newErrors = { email: "", mobile: "" };

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Invalid email address";
    }

    // Validate mobile number
    const mobileRegex = /^\d{10}$/;
    if (!formData.mobile.match(mobileRegex)) {
      newErrors.mobile = "Invalid mobile number";
    }

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form fields
    if (validateForm()) {
      // Handle form submission logic here, e.g., send data to backend
      console.log(formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        mobile: "",
        address: "",
      });
    }
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              error={!!errors.mobile}
              helperText={errors.mobile}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              name="address"
              multiline
              rows={4}
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Forms;
