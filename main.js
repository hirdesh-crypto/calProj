import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DatePicker from './datepicker.jsx';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
var dayss = 4;
var datesList = [
    new Date('2017-01-05'),
    new Date('2017-01-07'),
    new Date('2017-01-10'),
    new Date('2017-01-12'),
];
import 'react-datepicker/dist/react-datepicker.css';



class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = {
            is_checked: false
        };
    }

    toggleCheckbox(event) {
        let newValue = (this.state.is_checked === "on" || this.state.is_checked === true) ? false : true;
        this.setState({
            is_checked: newValue
        });
        if (newValue == false) {
            datesList = [
                new Date('2017-01-05'),
                new Date('2017-01-07'),
                new Date('2017-01-10'),
                new Date('2017-01-12'),
            ]
        }
        else datesList = [
            new Date('2017-01-06'),
            new Date('2017-01-08'),
            new Date('2017-01-11'),
            new Date('2017-01-13'),
        ]
    }

    render() {
        var new_date = moment(this.state.startDate, "DD.MM.YYYY");
        new_date.add(dayss-1, 'days');
        return (
            <div>
                <input type="checkbox" checked={this.state.is_checked}
                       onChange={this.toggleCheckbox.bind(this)}
                />Disable<br />
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
                <Checkbox/>
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

