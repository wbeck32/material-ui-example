import React, { useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';

const ThemedDatePicker = props => {
	const [selectedDate, handleDateChange] = useState(new Date());
	<MuiPickersUtilsProvider utils={MomentUtils}>
		<DatePicker
			{...ThemedDatePicker}
			value={selectedDate}
			onChange={handleDateChange}
		/>
	</MuiPickersUtilsProvider>;
};

ThemedDatePicker.PropTypes = {
	variant: PropTypes.string,
	minDate: PropTypes.instanceOf.Date,
};
export default ThemedDatePicker;
