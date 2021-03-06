import React from 'react'
import MonthDropdownOptions from './month_dropdown_options.jsx'
import onClickOutside from 'react-onclickoutside'
import moment from 'moment'
import range from 'lodash/range'

var WrappedMonthDropdownOptions = onClickOutside(MonthDropdownOptions)

var MonthDropdown = React.createClass({
    displayName: 'MonthDropdown',

    propTypes: {
        dropdownMode: React.PropTypes.oneOf(['scroll', 'select']).isRequired,
        locale: React.PropTypes.string,
        month: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    getInitialState () {
        return {
            dropdownVisible: false
        }
    },

    renderSelectOptions (monthNames) {
        return monthNames.map((M, i) => (
            <option key={i} value={i}>{M}</option>
        ))
    },

    renderSelectMode (monthNames) {
        return (
            <select value={this.props.month} className="react-datepicker__month-select" onChange={e => this.onChange(e.target.value)}>
                {this.renderSelectOptions(monthNames)}
            </select>
        )
    },

    renderReadView (visible, monthNames) {
        return (
            <div key="read" style={{visibility: visible ? 'visible' : 'hidden'}} className="react-datepicker__month-read-view" onClick={this.toggleDropdown}>
                <span className="react-datepicker__month-read-view--selected-month">{monthNames[this.props.month]}</span>
                <span className="react-datepicker__month-read-view--down-arrow" />
            </div>
        )
    },

    renderDropdown (monthNames) {
        return (
            <WrappedMonthDropdownOptions
                key="dropdown"
                ref="options"
                month={this.props.month}
                monthNames={monthNames}
                onChange={this.onChange}
                onCancel={this.toggleDropdown} />
        )
    },

    renderScrollMode (monthNames) {
        const { dropdownVisible } = this.state
        let result = [this.renderReadView(!dropdownVisible, monthNames)]
        if (dropdownVisible) {
            result.unshift(this.renderDropdown(monthNames))
        }
        return result
    },

    onChange (month) {
        this.toggleDropdown()
        if (month !== this.props.month) {
            this.props.onChange(month)
        }
    },

    toggleDropdown () {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
        })
    },

    render () {
        const localeData = moment.localeData(this.props.locale)
        const monthNames = range(0, 12).map((M) => localeData.months(moment({M})))

        let renderedDropdown
        switch (this.props.dropdownMode) {
            case 'scroll':
                renderedDropdown = this.renderScrollMode(monthNames)
                break
            case 'select':
                renderedDropdown = this.renderSelectMode(monthNames)
                break
        }

        return (
            <div
                className={`react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--${this.props.dropdownMode}`}>
                {renderedDropdown}
            </div>
        )
    }
})

module.exports = MonthDropdown
