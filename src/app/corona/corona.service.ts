import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class CoronaService {
    
    baseUrl = `https://api.kawalcorona.com`;

    constructor(private http: HttpClient){}

    getIndoStats(){
        //console.log("test");
        return this.http.get(`${this.baseUrl}/indonesia`);
        
    }

    getProvinceData(){
        return this.http.get(`${this.baseUrl}/indonesia/provinsi`);
    }


    
}
