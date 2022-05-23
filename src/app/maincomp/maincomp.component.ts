import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../shared/menu.model';
import { MenuserviceService } from '../shared/services/menuservice.service';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.scss']
})
export class MaincompComponent implements OnInit {

  passingId: any;
  menuData: any = [];
  SelectedMenuItem: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private menuService: MenuserviceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.passingId = params.get('id')!;
      console.log("passingId  ", this.passingId);
      this.menuService.getMenuItems().subscribe(this.processEvents.bind(this));
    });

 }

  processEvents: Function = (data: MenuItem[]) => {
    let passIDX = this.passingId;
    let SelectedMenu;
    data.forEach(function (value) {
      if (passIDX == value.id) {
        SelectedMenu = value;
      }
    });
    this.SelectedMenuItem = SelectedMenu;
  }
}
