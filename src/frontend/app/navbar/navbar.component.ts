import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.url.subscribe(url =>{
      console.log(url);
    });
  }

  ngOnInit() {
  }

}
