import React, { Component } from 'react';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import format from 'date-fns/format';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: new Date(),
      },
    };
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.selectionConfiguration && props.selectionConfiguration.type !== state.selectionConfiguration.type) {
        return {
            selectionConfiguration: {
                ...state.selectionConfiguration,
                type: props.selectionConfiguration.type
            }
        }
    }
    return null;
}

  handleDateSelect = (date) => {
    this.setState({
      selectedDate: date,
      selectionConfiguration: {
        type: this.props.selectionConfiguration.type,
        date: date,
      },
    });
  };

 
  render() {
    const { selectionConfiguration } = this.props;
    const { selectedDate } = this.state;

    return (
      <div>
        <BpkCalendar
          id="calendar"
          date={selectedDate}
          onDateSelect={this.handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={this.state.selectionConfiguration}
        />
      </div>
    );
  }
}

export default Calendar;