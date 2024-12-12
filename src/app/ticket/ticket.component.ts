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
    { name: 'Alice Johnson', code: 'AJ' },
    { name: 'Bob Smith', code: 'BS' },
    { name: 'Charlie Brown', code: 'CB' },
    { name: 'David Lee', code: 'DL' },
    { name: 'Emily Wilson', code: 'EW' },
  ];

  types: DropdownItem[] = [
    { name: 'Alice Johnson', code: 'AJ' },
    { name: 'Bob Smith', code: 'BS' },
    { name: 'Charlie Brown', code: 'CB' },
    { name: 'David Lee', code: 'DL' },
    { name: 'Emily Wilson', code: 'EW' },
  ];

  tickets: DropdownItem[] = [
    { name: 'Alice Johnson', code: 'AJ' },
    { name: 'Bob Smith', code: 'BS' },
    { name: 'Charlie Brown', code: 'CB' },
    { name: 'David Lee', code: 'DL' },
    { name: 'Emily Wilson', code: 'EW' },
  ];

  vendors: DropdownItem[] = [
    { name: 'Alice Johnson', code: 'AJ' },
    { name: 'Bob Smith', code: 'BS' },
    { name: 'Charlie Brown', code: 'CB' },
    { name: 'David Lee', code: 'DL' },
    { name: 'Emily Wilson', code: 'EW' },
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      selectedCustomer: [null],
      selectedType: [null],
      selectedVendor: [null],
      selectedTicket: [null],
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
