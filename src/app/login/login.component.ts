import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    console.log('login', username, password)
    this.dataService.login(username, password).subscribe()
  }

}
