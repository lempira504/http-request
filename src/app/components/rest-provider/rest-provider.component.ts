import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rest-provider',
  templateUrl: './rest-provider.component.html',
  styleUrls: ['./rest-provider.component.css']
})
export class RestProviderComponent implements OnInit {

  response: any;
  jsonFormat: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }


  sendGetRequest(){
    // this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      this.httpClient.get('https://api.github.com/users/koushikkothagal').subscribe(
      (res)=>{
        // this.jsonFormat = JSON.stringify(res);
        this.response = res;
        console.log(res);
    });
}
}
