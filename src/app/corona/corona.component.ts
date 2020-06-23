import { Component, OnInit } from "@angular/core";
import { CoronaService } from "./corona.service";
import { BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-items",
    templateUrl: "./corona.component.html"
})
export class CoronaComponent implements OnInit {
    indo = [];
    //name;
    province = [];
    province$ : BehaviorSubject<Array<any>>;
    //indo$ : BehaviorSubject<Array<any>>;

    constructor(private route: ActivatedRoute,private cs: CoronaService) { 
        this.province$ = new BehaviorSubject([]);
    }

    ngOnInit(): void {
        //this.name = this.route.snapshot.params.name;
        
        this.cs.getIndoStats().subscribe(
            (response : any) =>{
                //this.indo = response;
                this.indo.push(...response);
                console.log(this.indo);
                //console.log("test");
                //this.indo$.next(this.indo);
                
            }
        );

        /*this.ps.getProvinceData().subscribe(
            (response : any) => {
                //this.province.push(...response);
                this.province = response;
                console.log(this.province);
                //this.province$.next(this.province);
            }
        );*/

    }

    
}
