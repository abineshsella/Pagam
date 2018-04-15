import {Component} from "@angular/core";
import { TranslateService } from "ng2-translate";
@Component({
selector:"payment-header",
templateUrl:"./header.component.html",
styleUrls:["./header.component.css"]
})export class HeaderComponent{
    constructor(private translator:TranslateService){
        
    }
    merchantName="Abinesh";
    amount="0.01";
    currency="Euro";
}