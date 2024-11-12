import React from "react";
import {
  Box,
  InputLabel,
  Input,
  Button,
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Step1 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "60%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ marginBottom: "20px" }}>
          Step 1: User Information
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              {...register("name", { required: "Name is required", maxLength: 20 })}
              id="name"
              type="text"
            />
            {errors.name && <Typography color="error">{errors.name.message}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              {...register("username", { required: "Username is required" })}
              id="username"
              type="text"
            />
            {errors.username && <Typography color="error">{errors.username.message}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email format",
                },
              })}
              id="email"
              type="email"
            />
            {errors.email && <Typography color="error">{errors.email.message}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel htmlFor="age">Age</InputLabel>
            <Input
              {...register("age", {
                required: "Age is required",
                valueAsNumber: true,
                min: { value: 1, message: "Age must be at least 1" },
              })}
              id="age"
              type="number"
            />
            {errors.age && <Typography color="error">{errors.age.message}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Phone must be 10-15 digits",
                },
              })}
              id="phone"
              type="tel"
            />
            {errors.phone && <Typography color="error">{errors.phone.message}</Typography>}
          </FormControl>

          <FormControl component="fieldset" fullWidth sx={{ marginBottom: "20px" }}>
            <Typography>Gender:</Typography>
            <RadioGroup row>
              <FormControlLabel
                value="female"
                control={<Radio {...register("gender", { required: "Gender is required" })} />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio {...register("gender", { required: "Gender is required" })} />}
                label="Male"
              />
            </RadioGroup>
            {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}
          </FormControl>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Step1;
