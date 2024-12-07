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
      // config1: this.config1,
      // config2: this.config2,
      // config3: this.config3,
      // config4: this.config4,
      value1: this.value1,
      value2: this.value2,
      value3: this.value3,
      value4: this.value4,
    });
  }

  editCustomer() {
    console.log('Configurations:', {});
  }

  deleteCustomer() {
    console.log('Configurations:', {});
  }

  
}
