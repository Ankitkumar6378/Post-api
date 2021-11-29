import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-api';
  users:any;
  constructor(private userdata:UserdataService){
    userdata.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data});
  
  } 
  getdata(data:any)
  { 
  console.warn(data)
  this.userdata.saveuser(data).subscribe((result)=>{
    console.warn(result);
  });
  }
}
