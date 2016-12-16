import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DatePicker from './datepicker.jsx';
var dayss = 4;
const datesList = [
    '2016-12-18',
    '2016-12-21',
    '2016-12-23',
    '2016-12-26',
    '2016-12-27',
    '2016-12-28',
    '2016-12-29',
];
import 'react-datepicker/dist/react-datepicker.css';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: null,
        };
    }

    render() {
        var new_date = moment(this.state.startDate, "DD.MM.YYYY");
        new_date.add(dayss-1, 'days');
        return (
            <div>
                <div onChange={this.setDays.bind(this)}>
                    <input type="radio" value="4" name="days" defaultChecked="true" /> 4 Days
                    <input type="radio" value="6" name="days"/> 6 Days
                    <input type="radio" value="8" name="days"/> 8 Days
                </div>
            <DatePicker
                selected={this.state.startDate}
                startDate={this.state.startDate}
                endDate={new_date}
                dateFormat="DD/MM/YYYY"
                isClearable={true}
                minDate={moment()}
                maxDate={moment().add(120, "days")}
                excludeDates={datesList}
                onChange={this.handleChange.bind(this)}
            />
                </div>
        );
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    setDays(event) {
        dayss = event.target.value;

    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('accordion'))

