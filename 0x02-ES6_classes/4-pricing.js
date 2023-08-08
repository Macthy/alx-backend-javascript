// 4-pricing.js

// Import the class Currency from 3-currency.js
import Currency from './3-currency.js';

export default class Pricing {
  // Constructor for creating Pricing objects with amount and currency
  constructor(amount, currency) {
    this._amount = amount; // Private attribute to store the amount
    this._currency = currency; // Private attribute to store the currency object
  }

  // Getter for retrieving the amount
  get amount() {
    return this._amount;
  }

  // Setter for updating the amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for retrieving the currency
  get currency() {
    return this._currency;
  }

  // Setter for updating the currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full price in the required format: amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert the price using a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

