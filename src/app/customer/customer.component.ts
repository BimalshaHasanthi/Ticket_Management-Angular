import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  imports: [InputTextModule, ButtonModule, FormsModule, TableModule, ReactiveFormsModule, CommonModule],
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  title = 'Customer Page';
  value1: String = '';
  value2: String = '';
  value3: String = '';
  value4: String = '';

  value5: String = '';
  value6: String = '';
  value7: String = '';
  value8: String = '';

  value9: String = '';
  value10: String = '';
  value11: String = '';
  value12: String = '';

  // product1: String = '';
  product1 = [
    {
      cId: '1',
      cName: 'Customer A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
    {
      cId: '1',
      cName: 'Customer A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
    {
      cId: '1',
      cName: 'Customer A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
    {
      cId: '1',
      cName: 'Customer A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
  ];

  addCustomer() {
    console.log('Configurations:', {
      value1: this.value1,
      value2: this.value2,
      value3: this.value3,
      value4: this.value4,

      value5: this.value5,
      value6: this.value6,
      value7: this.value7,
      value8: this.value8,

      value9: this.value9,
      value10: this.value10,
      value11: this.value11,
      value12: this.value12,
    });
  }

  editCustomer() {
    console.log('Configurations:', {});
  }

  deleteCustomer() {
    console.log('Configurations:', {});
  }

  searchCustomerById() {
    console.log('Configurations:', {});
  }

  
}
