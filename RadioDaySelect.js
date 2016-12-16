import React from 'react';
var dayss;

export default class DaysSelect extends React.Component {


    render() {
        return (
            <div onChange={this.setDays.bind(this)}>
                <input type="radio" value="4" name="days"/> 4 Days
                <input type="radio" value="6" name="days"/> 6 Days
                <input type="radio" value="8" name="days"/> 8 Days
            </div>
        )
    }
    setDays(event) {
        dayss = event.target.value;
        console.log(dayss)

    }
}