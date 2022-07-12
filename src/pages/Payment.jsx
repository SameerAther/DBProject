import React from 'react';
import { TextField, Grid } from '@mui/material';

import {Button} from '../components/Button.component'
import '../App.css'

export class PaymentPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        Address1: '',
        Address2: '',
        pzcode: '',
        city: '',
        state: '',
        country: '',
        email: '',
        card: '',
        cvc: '',
        total: 0
    }
  }

  onFNameChange = (event) => {
    this.setState({firstName: event.target.value})
    this.setState({total: this.props.total})
  }

  onEmailChange = (event) => {
      this.setState({email: event.target.value});
  }

  onLNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  onAddress1Change = (event) => {
    this.setState({Address1: event.target.value});
  }

  onAddress2Change = (event) => {
    this.setState({Address2: event.target.value});
  }

  onCvcChange = (event) => {
    this.setState({cvc: event.target.value})
  }

  onCardChange = (event) => {
    this.setState({card: event.target.value})
  }

  onCountryChange = (event) => {
    this.setState({country: event.target.value})
  }

  onStateChange = (event) => {
    this.setState({state: event.target.value})
  }

  onPZCode = (event) => {
    this.setState({code: event.target.value})
  }

  onCityChange = (event) => {
    this.setState({city: event.target.value})
  }

  onSubmitPayment = () => {
    fetch('http://localhost:5000/payment', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        Address1: this.state.Address1,
        Address2: this.state.Address2,
        pzcode: this.state.pzcode,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        card: this.state.card,
        cvc: this.state.cvc,
        total: this.state.total
      })
    })
      .then(response => response.json())
  }

  render(){
  return (
    <form noValidate className="payment-form" autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" variant="outlined" onChange={this.onFNameChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="outlined" onChange={this.onLNameChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address line 1" variant="outlined" onChange={this.onAddress1Change} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address line 2" variant="outlined" onChange={this.onAddress2Change} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Postal/Zip Code" variant="outlined" onChange={this.onPZCodeChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="outlined" fullWidth onChange={this.onCityChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Province/State" variant="outlined" onChange={this.onStateChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Country" variant="outlined" onChange={this.onCountryChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email" variant="outlined" onChange={this.onEmailChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Credit/Debit Card" variant="outlined" onChange={this.onCardChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="CVC Number" variant="outlined" onChange={this.onCvcChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <span className="payment-total">TOTAL: ${this.props.total}</span>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Button
              class="btn-block" 
              type="submit"
              text={`pay now`.toUpperCase()}
              onSubmit={this.onSubmitPayment}/>
        </Grid>
      </Grid>
    </form>
  );
};}