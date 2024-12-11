// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   FormsModule,
//   ReactiveFormsModule,
// } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ButtonModule } from 'primeng/button';
// import { CardModule } from 'primeng/card';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputTextModule } from 'primeng/inputtext';

// @Component({
//   selector: 'app-ticket',
//   standalone: true,
//   imports: [
//     InputTextModule,
//     ButtonModule,
//     FormsModule,
//     CardModule,
//     DropdownModule,
//     ReactiveFormsModule,
//     // BrowserAnimationsModule,
//     // CommonModule
//   ],
//   templateUrl: './ticket.component.html',
//   styleUrl: './ticket.component.css',
// })
// export class TicketComponent {
//   // value1: String = '';
//   // value2: String = '';
//   // value3: String = '';
//   // value4: String = '';

//   totalTickets: number = 0;
//   ticketReleaseRate: number = 0;
//   customerRetrievalRate: number = 0;
//   maxTicketCapacity: number = 0;


//   formGroup: FormGroup;
//   types: string[]; // Array of city names
//   vendors: string[]; // Array of city names
//   customers: any[] = [
//     { name: 'New York', code: 'NY' },
//     { name: 'Los Angeles', code: 'LA' },
//     { name: 'Chicago', code: 'CHI' },
//     { name: 'Houston', code: 'HOU' },
//     { name: 'Phoenix', code: 'PHX' }
//   ];
//   // Array of city names

//   // constructor(private fb: FormBuilder) {
//   //   this.formGroup = this.fb.group({
//   //     selectedCity: [null], // Form control for the dropdown
//   //   });

//   constructor(private fb: FormBuilder) {
//     // Initialize the form group with the necessary controls
//     this.formGroup = this.fb.group({
//       selectedCustomer: [null], // Control for Customer dropdown
//       selectedType: [null], // Control for Type dropdown
//       selectedVendor: [null], // Control for Vendor dropdown
//       totalTickets: [this.totalTickets],
//       ticketReleaseRate: [this.ticketReleaseRate],
//       customerRetrievalRate: [this.customerRetrievalRate],
//       maxTicketCapacity: [this.maxTicketCapacity],
//     });

//     // Array of city names
//     this.customers = [
//       'New York',
//       'Los Angeles',
//       'Chicago',
//       'Houston',
//       'Phoenix',
//     ];
//     this.types = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
//     this.vendors = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
//   }

//   editParameters() {
//     console.log('Configurations:', {});
//   }

//   stopSimulation() {
//     console.log('Configurations:', {});
//   }
//   pauseSimulation() {
//     console.log('Configurations:', {});
//   }
//   startSimulation() {
//     console.log('Configurations:', {});
//   }

//   bookTicket() {
//     console.log('Configurations:', {});
//   }
// }




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

interface DropdownItem {
  name: string;
  code: string;
}

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    DropdownModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  totalTickets: number = 0;
  ticketReleaseRate: number = 0;
  customerRetrievalRate: number = 0;
  maxTicketCapacity: number = 0;

  formGroup: FormGroup;
  
  customers: DropdownItem[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Los Angeles', code: 'LA' },
    { name: 'Chicago', code: 'CHI' },
    { name: 'Houston', code: 'HOU' },
    { name: 'Phoenix', code: 'PHX' }
  ];

  types: DropdownItem[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Los Angeles', code: 'LA' },
    { name: 'Chicago', code: 'CHI' },
    { name: 'Houston', code: 'HOU' },
    { name: 'Phoenix', code: 'PHX' }
  ];

  tickets: DropdownItem[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Los Angeles', code: 'LA' },
    { name: 'Chicago', code: 'CHI' },
    { name: 'Houston', code: 'HOU' },
    { name: 'Phoenix', code: 'PHX' }
  ];

  vendors: DropdownItem[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Los Angeles', code: 'LA' },
    { name: 'Chicago', code: 'CHI' },
    { name: 'Houston', code: 'HOU' },
    { name: 'Phoenix', code: 'PHX' }
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      selectedCustomer: [null],
      selectedType: [null],
      selectedVendor: [null],
      selectedTicket:[null],
      totalTickets: [this.totalTickets],
      ticketReleaseRate: [this.ticketReleaseRate],
      customerRetrievalRate: [this.customerRetrievalRate],
      maxTicketCapacity: [this.maxTicketCapacity],
    });
  }
  
  editParameters() {
    console.log('Configurations:', {});
  }

  stopSimulation() {
    console.log('Configurations:', {});
  }

  resetSimulation() {
    console.log('Configurations:', {});
  }

  startSimulation() {
    console.log('Configurations:', {});
  }

  bookTicket() {
    console.log('Configurations:', {});
  }
}