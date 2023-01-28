import React, {useState} from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';
import { useState } from 'react';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date(),
 }

const Form = () => {
  const classes = useStyles(); 
  const [formData, setformData] = useState(initialState);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant='subtitle2' gutterBottom>

        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
         <Textfield type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth /> 
      </Grid>
      <Grid item xs={6}>
         <Textfield type="date" label="Date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} /> 
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth >Create</Button>
    </Grid>
  )
}

export default Form
