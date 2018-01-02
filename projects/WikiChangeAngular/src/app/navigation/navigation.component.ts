import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() bodyClassChange = new EventEmitter<string>();
  @Input() bodyClass: string;
  activeMenu = 'home';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.bodyClass = this.bodyClass === 'nav-md' ? 'nav-sm' : 'nav-md';
    this.bodyClassChange.emit(this.bodyClass);
  }

}
