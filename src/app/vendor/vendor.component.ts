import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, TableModule, ReactiveFormsModule, CommonModule],
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})
export class VendorComponent {
  title = 'Vendor Page';

  value1: String = '';
  value2: String = '';
  value3: String = '';
  value4: String = '';

  // product1: String = '';
  product1 = [
    {
      cId: '1',
      cName: 'Vendor A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
    {
      cId: '1',
      cName: 'Vendor A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
    {
      cId: '1',
      cName: 'Vendor A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
    {
      cId: '1',
      cName: 'Vendor A',
      cEmail: 'customer1@email.com',
      cNumber: '0771234567',
    },
  ];

  addVendor(){
    console.log('Configurations:', {});
  }


  editVendor() {
    console.log('Configurations:', {});
  }

  deleteVendor() {
    console.log('Configurations:', {});
  }

}
