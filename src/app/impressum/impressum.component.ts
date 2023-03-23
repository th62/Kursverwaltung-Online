import {Component, OnInit} from '@angular/core';
import {FormatterService} from "../_services/formatter.service";

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent  implements OnInit {
  constructor(public formatter: FormatterService) {
  }

  ngOnInit(): void {  }

}
