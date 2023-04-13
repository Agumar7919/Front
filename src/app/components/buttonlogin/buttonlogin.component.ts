import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttonlogin',
  templateUrl: './buttonlogin.component.html',
  styleUrls: ['./buttonlogin.component.css']
})
export class ButtonloginComponent implements OnInit {
  @Input() text: string="LOGIN";
  @Input() color: string="";
  constructor() {}
  ngOnInit(): void {
  }
}

