import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interfaces/field.interface';
import { CommonHelperService } from 'src/app/service/common-helper.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnDestroy {
  field: FieldConfig;
  group: FormGroup;
  constructor(private commonService: CommonHelperService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.commonService.loadOptions(this.field.optionLoadKey).subscribe(data => this.field.options = data);
  }
}
