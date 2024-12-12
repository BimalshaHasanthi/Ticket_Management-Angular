import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private apiUrl = 'http://localhost:8080/api/v1/vendor';

  constructor(private http: HttpClient) {}

  saveVendor(vendor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, vendor);
  }

  updateVendor(vendor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, vendor);
  }

  deleteVendor(vendorId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${vendorId}`);
  }

  getVendor(vendorId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get/${vendorId}`);
  }

  getAllVendors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-all`);
  }
}
