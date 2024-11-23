import { NgxMatDateFormats } from '@imario42/datetime-picker';

const DEFAULT_DATE_INPUT = 'l, LTS';

export const NGX_MAT_MOMENT_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: DEFAULT_DATE_INPUT,
  },
  display: {
    dateInput: DEFAULT_DATE_INPUT,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
