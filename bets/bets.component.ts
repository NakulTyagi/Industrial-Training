import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.getElementById("list1").style.display = "none";
    document.getElementById("list2").style.display = "none";
  }

  click1() {
    document.getElementById("list1").style.display = "block"

  }
  click2() {
    document.getElementById("list2").style.display = "block"
  }

  // Or with jQuery





}
