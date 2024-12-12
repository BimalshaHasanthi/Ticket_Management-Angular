import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { VendorService } from './vendor.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css',
})
// export class VendorComponent implements OnInit {
export class VendorComponent {
  title = 'Vendor Page';

  value1: string = '';
  value2: string = '';
  value3: string = '';
  value4: string = '';

  value5: string = '';
  value6: string = '';
  value7: string = '';
  value8: string = '';

  value9: string = '';
  value10: string = '';
  value11: string = '';
  value12: string = '';

  // new
  vendor = {
    cId: '',
    cName: '',
    cEmail: '',
    cNumber: '',
  };

  vendors: any[] = [];

  //

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

  // ngOnInit(): void {
  //   this.loadVendors();
  // }

  // constructor(private vendorService: VendorService) {}

  // Method to load all vendors
  loadVendors() {
    // this.vendorService.getAllVendors().subscribe(
    //   (vendors) => {
    //     this.product1 = vendors;
    //   },
    //   (error) => {
    //     console.error('Error fetching vendors:', error);
    //   }
    // );
  }

  // Method to add a vendor
  addVendor() {
    // const newVendor = {
    //   cId: this.value1,
    //   cName: this.value2,
    //   cEmail: this.value3,
    //   cNumber: this.value4,
    // };
    // this.vendorService.saveVendor(newVendor).subscribe(
    //   (response) => {
    //     console.log('Vendor added successfully:', response);
    //     this.loadVendors(); // Refresh the vendor list
    //   },
    //   (error) => {
    //     console.error('Error adding vendor:', error);
    //   }
    // );
  }

  // Method to edit a vendor
  editVendor() {
    // const updatedVendor = {
    //   cId: this.value5,
    //   cName: this.value6,
    //   cEmail: this.value7,
    //   cNumber: this.value8,
    // };
    // this.vendorService.updateVendor(updatedVendor).subscribe(
    //   (response) => {
    //     console.log('Vendor updated successfully:', response);
    //     this.loadVendors(); // Refresh the vendor list
    //   },
    //   (error) => {
    //     console.error('Error updating vendor:', error);
    //   }
    // );
  }

  // Method to delete a vendor
  deleteVendor() {
    // this.vendorService.deleteVendor(this.value9).subscribe(
    //   (response) => {
    //     console.log('Vendor deleted successfully:', response);
    //     this.loadVendors(); // Refresh the vendor list
    //   },
    //   (error) => {
    //     console.error('Error deleting vendor:', error);
    //   }
    // );
  }

  // Method to search for a vendor by ID and populate the form for edit/delete
  searchVendorById(vendorId: string) {
    // this.vendorService.getVendor(vendorId).subscribe(
    //   (response) => {
    //     if (response) {
    //       // Populate the edit or delete form with the fetched vendor data
    //       this.value6 = response.cName;
    //       this.value7 = response.cEmail;
    //       this.value8 = response.cNumber;
    //       this.value10 = response.cName;
    //       this.value11 = response.cEmail;
    //       this.value12 = response.cNumber;
    //     } else {
    //       console.error('Vendor not found');
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching vendor:', error);
    //   }
    // );
  }
}
