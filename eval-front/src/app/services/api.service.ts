import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, retry, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private baseURL = environment.apiUrl;

    constructor(
        private http: HttpClient,
    ) { }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        return throwError(() => new Error(error.error.message));
    }

    private createHeaders(contentType: string | null): HttpHeaders {
        let headers = new HttpHeaders();

        if (contentType != null) {
            headers = headers.set('Content-Type', contentType as string);
        }
        return headers;
    }

    get<T>(endpoint: string): Observable<T> {
        return this.http
            .get<T>(this.baseURL + endpoint, {
                headers: this.createHeaders('application/json'),
            })
            .pipe(retry(3), catchError(this.handleError));
    }

    post<T>(endpoint: string, data: any): Observable<T> {
        return this.http
            .post<T>(this.baseURL + endpoint, data, {
                headers: this.createHeaders('application/json'),
            })
            .pipe(catchError(this.handleError));
    }

    postForm<T>(endpoint: string, data: FormData): Observable<T> {
        return this.http
            .post<T>(this.baseURL + endpoint, data, {
                headers: this.createHeaders(null),
            })
            .pipe(catchError(this.handleError));
    }

    put<T>(endpoint: string, data: T): Observable<T> {
        return this.http
            .put<T>(this.baseURL + endpoint, data, {
                headers: this.createHeaders('application/json'),
            })
            .pipe(catchError(this.handleError));
    }

    putForm<T>(endpoint: string, data: FormData): Observable<T> {
        return this.http
            .put<T>(this.baseURL + endpoint, data, {
                headers: this.createHeaders(null),
            })
            .pipe(catchError(this.handleError));
    }

    delete<T>(endpoint: string): Observable<T> {
        return this.http
            .delete<T>(this.baseURL + endpoint, {
                headers: this.createHeaders('application/json'),
            })
            .pipe(catchError(this.handleError));
    }
}
