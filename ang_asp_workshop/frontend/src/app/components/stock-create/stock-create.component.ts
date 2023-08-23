import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss'],
})
export class StockCreateComponent implements OnInit {
  imageURL = null;
  imageFile = null;
  formProduct!: FormGroup;
  constructor(private rest: RestService, private location: Location) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {}

  onSubmit() {}

  onClickCancel() {
    this.location.back();
  }
}
