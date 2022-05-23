import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
  menues: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/data/menu.json").subscribe(data => {
        this.menues = data;
    });
  }

  menuClick(menuItem:any){
    console.log("menuItem  ", menuItem);
  }
}
