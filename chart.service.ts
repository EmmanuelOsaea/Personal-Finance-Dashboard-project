// chart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private apiUrl = 'https://your-api-url.com/data'; // Replace with your data API URL

  constructor(private http: HttpClient) { }

  getChartData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/charts`);
  }
}
