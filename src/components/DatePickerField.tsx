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
  const [date, setDate] = useState(new Date());
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue('dateOfBirth', date.toISOString().replace(/T.*/, ''));
  }, [date]);

  return (
    <div className='react-datepicker-wrapper !block w-full'>
      <DatePicker
        dateFormat='dd-MM-YYYY'
        selected={date}
        onChange={(date) => {
          if (date) {
            setDate(date);
          }
        }}
        className='mt-1 w-full flex-1 rounded-lg px-4 py-2 text-black'
        name='dateOfBirth'
      />
    </div>
  );
};

export default DatePickerField;
