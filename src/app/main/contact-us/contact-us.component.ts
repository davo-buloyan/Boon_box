import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http } from "@angular/http";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  email: string;
  name: string;
  message: string;
  subject: string;
  endpoint: string;

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    //This data could really come from some inputs on the interface - but let's keep it simple.
    this.email = " ";
    this.name = " ";
    this.subject = " "
    this.message = " ";

    //Start php via the built in server: $ php -S localhost:8000
    this.endpoint = "http://boonbox.shop/assets/sendEmail.php";
  }

  sendEmail() {
    let postVars = {
      email: this.email,
      name: this.name,
      subject: this.subject,
      message: this.message
    };

    //You may also want to check the response. But again, let's keep it simple.
    this.http.post(this.endpoint, postVars)
      .subscribe(
        response => console.log(response),
        response => console.log(response)
      )
  }
}