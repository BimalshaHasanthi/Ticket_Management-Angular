import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [FormsModule, ChartModule],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Home Page';
  data: any; // Chart data
  options: any; // Chart options

  constructor() {
    // Define the chart data
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sell',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#42A5F5',
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Buy',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: '#FFA726',
          tension: 0.4,
          fill: false,
        },
      ],
    };

    // Define the chart options
    this.options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Months',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Values',
          },
          min: 0,
          max: 100,
        },
      },
    };
  }
}
