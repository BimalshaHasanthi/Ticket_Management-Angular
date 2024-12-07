// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   standalone: true,
//   imports: [],
//   templateUrl: './admin.component.html',
//   styleUrl: './admin.component.css'
// })
// export class AdminComponent {
//   title = 'Admin Page';
//   addConfigurations() {}
// }

import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  imports: [InputTextModule, FormsModule, FloatLabelModule, ButtonModule],
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  // config1: string = '';
  // config2: string = '';
  // config3: string = '';
  // config4: string = '';

  value1: String = '';
  value2: String = '';
  value3: String = '';
  value4: String = '';

  addConfigurations() {
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
    // Your logic for handling the configuration values
  }
}
