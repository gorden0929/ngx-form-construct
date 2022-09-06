import { Component, OnInit } from '@angular/core';
import { IFieldConfig } from 'projects/ngx-form-construct/src/public-api';

@Component({
  selector: 'app-view-form-control-array',
  templateUrl: './view-form-control-array.component.html',
  styleUrls: ['./view-form-control-array.component.css']
})
export class ViewFormControlArrayComponent implements OnInit {

  exampleConfigs: IFieldConfig[];
  exampleConfigsString?: string;

  constructor() {
    this.exampleConfigs = [
      {
        type: 'array',
        array: {
          name: 'addresses',
          add_button: {
            icon: ['bi', 'bi-plus'],
            classes: ['btn', 'btn-outline-primary', 'btn-sm']
          },
          remove_button: {
            icon: ['bi', 'bi-trash'],
            classes: ['btn', 'btn-outline-danger', 'btn-sm']
          },
          configs: [
            {
              type: 'input',
              label: {
                text: 'Line 1',
                classes: ['form-label'],
              },
              input: {
                type: 'text',
                name: 'address_1',
                classes: ['form-control', 'form-control-sm'],
              },
              grid: ['mb-2', 'col-12', 'col-md-6'],
            },
            {
              type: 'input',
              label: {
                text: 'Line 2',
                classes: ['form-label'],
              },
              input: {
                type: 'text',
                name: 'address_2',
                classes: ['form-control', 'form-control-sm'],
              },
              grid: ['mb-2', 'col-12', 'col-md-6'],
            },
            {
              type: 'select',
              label: {
                text: 'Country',
                classes: ['form-label'],
              },
              select: {
                data: [{ name: 'China', value: 'CN' }, { name: 'United States', value: 'US' }],
                name: 'country',
                placeholder: 'Select a country',
                classes: ['form-select', 'form-select-sm'],
                key_property: 'name',
                value_property: 'value',
              },
              grid: ['mb-2', 'col-md-6'],
            },
            {
              type: 'select',
              label: {
                text: 'State',
                classes: ['form-label'],
              },
              select: {
                data: [{ name: 'California', value: 'CA' }, { name: 'New York', value: 'NY' }],
                name: 'state',
                placeholder: 'Select a state',
                classes: ['form-select', 'form-select-sm'],
                key_property: 'name',
                value_property: 'value',
              },
              grid: ['mb-2', 'col-md-6'],
            },
          ]
        }
      },
      {
        type: 'button',
        button: {
          type: 'submit',
          text: 'Submit',
          classes: ['btn', 'btn-primary', 'float-end'],
        }
      }
    ]
  }

  ngOnInit(): void {
    this.exampleConfigsString = JSON.stringify(this.exampleConfigs, null, 2);
  }

  formOnSubmit(event: any) {
    console.log(event);
  }

}
