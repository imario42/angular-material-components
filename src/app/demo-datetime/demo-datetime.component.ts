import { Component, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import {
  NgxMatDatepickerActions,
  NgxMatDatepickerApply,
  NgxMatDatepickerCancel,
  NgxMatDatepickerClear,
  NgxMatDatepickerInput,
  NgxMatDatepickerToggle,
  NgxMatDatetimepicker,
} from 'projects/datetime-picker/src';
import { NgxMatHighlightDirective } from '../shared/NgxMatHighlightDirective';

@Component({
  selector: 'app-demo-datetime',
  templateUrl: './demo-datetime.component.html',
  styleUrls: ['./demo-datetime.component.scss'],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    NgxMatDatepickerActions,
    NgxMatDatepickerApply,
    NgxMatDatepickerCancel,
    NgxMatDatepickerClear,
    NgxMatDatepickerInput,
    NgxMatDatepickerToggle,
    NgxMatDatetimepicker,
    NgxMatHighlightDirective,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class DemoDatetimeComponent {
  pickerElement = viewChild(NgxMatDatetimepicker);

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: Date;
  public maxDate: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public disableMinute = false;
  public hideTime = false;

  public dateControl = new FormControl<Date>(null);

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' },
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];

  public code1 = 'npm install --save @imario42/datetime-picker';

  public code3 = `
  <mat-form-field>
    <input matInput [ngxMatDatetimePicker]="picker" placeholder="Choose a date" [formControl]="dateControl"
      [min]="minDate" [max]="maxDate" [disabled]="disabled">
    <ngx-mat-datepicker-toggle matSuffix [for]="picker"></ngx-mat-datepicker-toggle>
    <ngx-mat-datetime-picker #picker [showSpinners]="showSpinners" [showSeconds]="showSeconds"
      [stepHour]="stepHour" [stepMinute]="stepMinute" [stepSecond]="stepSecond" [touchUi]="touchUi"
      [color]="color" [enableMeridian]="enableMeridian" [disableMinute]="disableMinute" [hideTime]="hideTime">
    </ngx-mat-datetime-picker>
  </mat-form-field>
`;

  public code2 = `
  import {
    NgxMatDatetimePickerComponent,
    NgxMatNativeDateComponent,
    NgxMatTimepickerComponent
  } from '@imario42/datetime-picker';

  @Component({
    imports: [
      ...
      NgxMatDatetimePickerComponent,
      NgxMatTimepickerComponent,
      NgxMatNativeDateComponent,
      ...
    ]
  })
  export class AppComponent { }`;
  public code4 = 'npm install --save  @imario42/moment-adapter';
  public code5 = `@Injectable()
  export class CustomDateAdapter extends NgxMatDateAdapter<D> {...}
  // D can be Date, Moment or customized type`;

  public code6 = `@Component({
    providers: [
      {
        provide: NgxMatDateAdapter,
        useClass: CustomDateAdapter,
        deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      }
    ],
  })
  export class CustomDateComponent { }
`;

  public code7 = `// If using Moment
const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "l, LTS",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

//and in the module providers
providers: [
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS }
  ]`;

  public code8 =
    '<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">';

  public code9 = `<mat-form-field>
  <input
    matInput
    [ngxMatDatetimePicker]="pickerCustomIcon"
    placeholder="Choose a date"
    [formControl]="dateControl"
    [min]="minDate"
    [max]="maxDate"
    [disabled]="disabled" />
  <ngx-mat-datepicker-toggle matSuffix [for]="pickerCustomIcon"></ngx-mat-datepicker-toggle>
  <ngx-mat-datetime-picker
    #pickerCustomIcon
    [showSpinners]="showSpinners"
    [showSeconds]="showSeconds"
    [stepHour]="stepHour"
    [stepMinute]="stepMinute"
    [stepSecond]="stepSecond"
    [touchUi]="touchUi"
    [color]="color"
    [enableMeridian]="enableMeridian"
    [disableMinute]="disableMinute"
    [hideTime]="hideTime">
    <ngx-mat-datepicker-actions>
      <div class="datepicker-acctions">
        <button mat-button ngxMatDatepickerClear close="true">Clear</button>

        <div>
          <button mat-button ngxMatDatepickerCancel>Cancel</button>
          <button mat-raised-button color="primary" ngxMatDatepickerApply [color]="color">
            Apply
          </button>
        </div>
      </div>
    </ngx-mat-datepicker-actions>
  </ngx-mat-datetime-picker>
</mat-form-field>`;

  public code10 = `
  <mat-form-field>
    <input
      matInput
      [ngxMatDatetimePicker]="pickerCustomIcon"
      placeholder="Choose a date"
      [formControl]="dateControl"
      [min]="minDate"
      [max]="maxDate"
      [disabled]="disabled" />
    <ngx-mat-datepicker-toggle matSuffix [for]="pickerCustomIcon">
      <mat-icon ngxMatDatepickerToggleIcon>keyboard_arrow_down</mat-icon>
    </ngx-mat-datepicker-toggle>
    <ngx-mat-datetime-picker
      #pickerCustomIcon
      [showSpinners]="showSpinners"
      [showSeconds]="showSeconds"
      [stepHour]="stepHour"
      [stepMinute]="stepMinute"
      [stepSecond]="stepSecond"
      [touchUi]="touchUi"
      [color]="color"
      [enableMeridian]="enableMeridian"
      [disableMinute]="disableMinute"
      [hideTime]="hideTime">
    </ngx-mat-datetime-picker>
  </mat-form-field>`;

  toggleMinDate(evt: any) {
    if (evt.checked) {
      this._setMinDate();
    } else {
      this.minDate = null;
    }
  }

  toggleMaxDate(evt: any) {
    if (evt.checked) {
      this._setMaxDate();
    } else {
      this.maxDate = null;
    }
  }

  closePicker() {
    this.pickerElement().close();
  }

  private _setMinDate() {
    const now = new Date();
    this.minDate = new Date();
    this.minDate.setDate(now.getDate() - 1);
  }

  private _setMaxDate() {
    const now = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(now.getDate() + 1);
  }
}
