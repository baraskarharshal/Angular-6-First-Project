import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.scss']
})
export class TformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
 }

}
