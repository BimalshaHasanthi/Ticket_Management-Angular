import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MenubarModule, RouterOutlet],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['/home']);
      },
    },
    {
      label: 'Customer',
      icon: 'pi pi-users',
      command: () => {
        this.router.navigate(['/customer']);
      },
    },
    {
      label: 'Vendor',
      icon: 'pi pi-users',
      command: () => {
        this.router.navigate(['/vendor']);
      },
    },
    // {
    //   label: 'Admin',
    //   icon: 'pi pi-users',
    //   command: () => {
    //     this.router.navigate(['/admin']);
    //   },
    // },
    {
      label: 'Ticket',
      icon: 'pi pi-users',
      command: () => {
        this.router.navigate(['/ticket']);
      },
    },
  ];
}
