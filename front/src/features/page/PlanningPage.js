import React from 'react';
import DateFnsUtils from "@date-io/date-fns";
import BannerOtherPage from "../composent/Banner/BannerOtherPage";
import {MuiPickersUtilsProvider, DatePicker, TimePicker, DateTimePicker} from "@material-ui/pickers";


const PlanningPage = () => {

    const [selectedDate, setSelectedDate] = React.useState(
        Date("2022-03-11T12:00:00")
    )

    const handleDateChange = (date) =>
    {
        setSelectedDate(date);
    }

    return (
        <>
            <BannerOtherPage title={"Planning Du Navire"}/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
        </>
                );
};

export default PlanningPage;