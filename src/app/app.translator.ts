import { TranslateModule,TranslateLoader,TranslateStaticLoader } from "ng2-translate";
import { Http } from "@angular/http";
export const  translateProperties=TranslateModule.forRoot({
    provide:TranslateLoader,
    useFactory:(http:Http)=>new TranslateStaticLoader(http,'assets/languages','.json'),
    deps:[Http]
})