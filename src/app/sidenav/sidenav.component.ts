import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public showMenu = true;
  public navOptions: any = ["Seek Guidance", "Perform Online Pujas", "Explore Astrologers"];
  constructor() { }

  ngOnInit() {
  }

}
