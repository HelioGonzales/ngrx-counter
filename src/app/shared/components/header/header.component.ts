import { Component, OnInit } from '@angular/core';
import { BdcWalkService } from 'bdc-walkthrough';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private bdcWalkService: BdcWalkService) {}

  ngOnInit(): void {}

  reset() {
    this.bdcWalkService.reset('example1');
  }
}
