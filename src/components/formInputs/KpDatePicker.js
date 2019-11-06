import React, { useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';

const KpDatePicker = props => {
	const [selectedDate, handleDateChange] = useState(new Date());
	<MuiPickersUtilsProvider utils={MomentUtils}>
		<DatePicker
			{...KpDatePicker}
			value={selectedDate}
			onChange={handleDateChange}
		/>
	</MuiPickersUtilsProvider>;
};

KpDatePicker.PropTypes = {
	variant: PropTypes.string,
	minDate: PropTypes.instanceOf.Date,
};
export default KpDatePicker;
