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
              select: {
                option: {
                  datas: [{ name: 'Malaysia', value: 'MY' }, { name: 'Singapore', value: 'SG' }],
                  key_property: 'name',
                  value_property: 'value',
                },
                fields: [
                  {
                    name: 'country',
                    placeholder: 'Select a country',
                    classes: ['form-control', 'form-control-sm'],
                    label: {
                      text: 'Country',
                      classes: ['form-label'],
                    },
                    grid: ['mb-2', 'col-12', 'col-md-6'],
                  },
                  {
                    name: 'state',
                    placeholder: 'Select a state',
                    classes: ['form-control', 'form-control-sm'],
                    label: {
                      text: 'State',
                      classes: ['form-label'],
                    },
                    grid: ['mb-2', 'col-12', 'col-md-6'],
                  }
                ]
              },
              grid: ['mb-2', 'col-12'],
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
