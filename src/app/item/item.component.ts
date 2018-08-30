import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

Numbers = [
  '1','2','3'
]
myDate = new Date();
  ngOnInit() {
  }
  isValid = true

}
