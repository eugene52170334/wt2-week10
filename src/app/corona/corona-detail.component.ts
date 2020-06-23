import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoronaService } from "./corona.service";

@Component({
    selector: "ns-details",
    templateUrl: "./corona-detail.component.html"
})
export class CoronaDetailComponent implements OnInit {
    //name;
    province; 

    constructor(
       
        //private route: ActivatedRoute,
        private cs: CoronaService
    ) { }

    ngOnInit(): void {
        //this.name = this.route.snapshot.params.name;
        //console.log(name);
        this.cs.getProvinceData().subscribe(
            response => {
                this.province = response;
                console.log(this.province);
            }
        )
    }
}
