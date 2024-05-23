import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Employee} from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  save(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
      const body = {  };
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
  
    return this.http
      .post<Employee>("http://localhost:5000/api/technicalskills", body, { headers })
      .pipe(
        tap((response: any) => {
          // Check if token exists in response
          const token = response.token;
          if (token) {
            // Store token in localStorage or sessionStorage
            localStorage.setItem("token", token);
            // You can also decode the token and store user details if needed
          }
        }),
        catchError((error) => {
          console.error("Login failed:", error);
          return throwError(error);
        })
      );
  }

saveEmployee(postData: any) {
    return this.http.post('http://localhost:5000/api/technicalskills', postData);
  }
}
