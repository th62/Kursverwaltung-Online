import {Component, OnInit} from '@angular/core';
import {FormatterService} from "../_services/formatter.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.css']
})
export class DatenschutzComponent implements OnInit {

  constructor(private userService: UserService, public formatter: FormatterService) { }

  ngOnInit(): void { }
}
