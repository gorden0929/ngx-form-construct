import { Component, OnInit } from '@angular/core';
import { IFieldConfig } from 'projects/ngx-form-construct/src/public-api';

@Component({
  selector: 'app-view-form-control-basic',
  templateUrl: './view-form-control-basic.component.html',
  styleUrls: ['./view-form-control-basic.component.css']
})
export class ViewFormControlBasicComponent implements OnInit {

  exampleConfigs!: IFieldConfig[];
  exampleConfigsString!: string;

  constructor() {
    this.exampleConfigs = [
      {
        type: 'input',
        label: {
          text: 'Text',
          classes: ['form-label'],
        },
        grid: ['mb-3', 'col-12', 'col-md-6'],
        input: {
          type: 'text',
          name: 'text',
          classes: ['form-control'],
          placeholder: 'Hello world',
        }
      },
      {
        type: 'input',
        label: {
          text: 'Number',
          classes: ['form-label'],
        },
        grid: ['mb-3', 'col-12', 'col-md-6'],
        input: {
          type: 'number',
          name: 'number',
          classes: ['form-control'],
          placeholder: 'Enter a number',
        }
      },
      {
        type: 'input',
        label: {
          text: 'Email address',
          classes: ['form-label'],
        },
        grid: ['mb-3', 'col-12', 'col-md-6'],
        input: {
          type: 'email',
          name: 'email_address',
          classes: ['form-control'],
          placeholder: 'name@example.com',
        }
      },
      {
        type: 'input',
        label: {
          text: 'Phone number',
          classes: ['form-label'],
        },
        grid: ['mb-3', 'col-12', 'col-md-6'],
        input: {
          type: 'tel',
          name: 'phone_number',
          classes: ['form-control'],
          placeholder: '1234567890',
        }
      },
      {
        type: 'textarea',
        label: {
          text: 'Example textarea',
          classes: ['form-label'],
        },
        grid: ['mb-3'],
        textarea: {
          name: 'example_textarea',
          classes: ['form-control'],
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
    ];
    this.exampleConfigsString = JSON.stringify(this.exampleConfigs, null, 2);
  }

  ngOnInit(): void {
  }

  formOnSubmit(event: any) {
    console.log(event);
  }
}
