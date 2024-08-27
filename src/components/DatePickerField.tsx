import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerFieldProps {
  name: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
}

const DatePickerField: React.FC<DatePickerFieldProps> = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue(
      'dateOfBirth',
      `${startDate.getFullYear()}-${startDate.getMonth() > 9 ? startDate.getMonth() : `0${startDate.getMonth()}`}-${startDate.getDay() > 9 ? startDate.getDay() : `0${startDate.getDay()}`}`,
    );
  }, [startDate, setFieldValue]);

  return (
    <div className='react-datepicker-wrapper !block w-full'>
      <DatePicker
        dateFormat={'dd-MM-YYYY'}
        selected={startDate}
        onChange={(date) => {
          if (date) {
            setStartDate(date);
          }
        }}
        className='mt-1 w-full flex-1 rounded-lg px-4 py-2 text-black'
        name='dateOfBirth'
      />
    </div>
  );
};

export default DatePickerField;
