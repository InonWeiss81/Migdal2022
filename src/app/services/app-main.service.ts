import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class AppMainService {
    refreshProcessClick: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    processInfoForm: FormGroup | undefined;

    private http: HttpClient;

    refreshProcess() {
        this.refreshProcessClick.next(null); 
    }

    getReadmeFileText(): Observable<File> {
        return this.http.get<File>('assets/ReadMe.txt');
    }

    constructor(private httpClient: HttpClient) {
        this.http = this.httpClient;
    }
}