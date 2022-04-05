import { Component } from '@angular/core';
import { TestService } from './service-File/test.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: TestService) { }
  displayedColumns = ['tsID', 'name', 'email', 'gender', 'location'];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.service.getData().subscribe((data: any) => {
      this.dataSource.data = data[0];
    })
  }
  validateEmail(email: any) {
    if (email == '' || email == undefined || email == null) {
      return false
    } else {
      const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(String(email))
      return regularExpression.test(String(email).toLowerCase());
    }

  }


}
