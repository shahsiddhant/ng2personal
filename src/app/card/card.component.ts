import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public works = [{
    "title": "Testing 01",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    'source': '/assets/acid2.png'
  },
  {
    "title": "Testing 02",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing eli123"],
    'source': '/assets/website.jpg'
  },
  {
    "title": "Testing 03",
    "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing el5345."],
    'source': '/assets/knight.png'
  }]
  constructor() { }

  ngOnInit() {
  }

}
