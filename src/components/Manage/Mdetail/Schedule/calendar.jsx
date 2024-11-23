import React, { useState, useEffect, useRef } from 'react';
import './calendarstyles.css';
//import './calendarstyle2.css';

const Calendar = () => {
	const [date, setDate] = useState(new Date());
	const [activeDay, setActiveDay] = useState(null);
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const [days, setDays] = useState([]);
	const [isEventContainerActive, setIsEventContainerActive] = useState(false);
	const [events, setEvents] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [selectedDayEvents, setSelectedDayEvents] = useState([]);
	const dateInputRef = useRef();
	const eventTitleRef = useRef();
	const eventStartDateRef = useRef();
	const eventEndDateRef = useRef();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	useEffect(() => {
		const storedEvents = localStorage.getItem('events');
		if (storedEvents) {
			setEvents(JSON.parse(storedEvents));
		}
	}, []);

	const saveEvents = (newEvents) => {
		localStorage.setItem('events', JSON.stringify(newEvents));
		setEvents(newEvents);
	};

	const initCalendar = () => {
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const prevLastDay = new Date(year, month, 0);
		const prevDays = prevLastDay.getDate();
		const lastDate = lastDay.getDate();
		const day = firstDay.getDay();
		const nextDays = 7 - lastDay.getDay() - 1;

		let daysArray = [];

		// 달력에서 지난달 회색 처리
		for (let x = day; x > 0; x--) {
			daysArray.push({
				day: prevDays - x + 1,
				class: 'day prev-date',
				month: month - 1,
				year: month === 0 ? year - 1 : year,
			});
		}

		// 달력에서 현재 달 날짜 추가
		for (let i = 1; i <= lastDate; i++) {
			let className = 'day';
			const hasEvent = events.some((event) => {
				const eventStart = new Date(event.startDate);
				const eventEnd = new Date(event.endDate);
				const currentDate = new Date(year, month, i);
				return currentDate >= eventStart && currentDate <= eventEnd;
			});

			if (
				i === new Date().getDate() &&
				month === new Date().getMonth() &&
				year === new Date().getFullYear()
			) {
				className = `day today${hasEvent ? ' event' : ''}`;
			} else if (hasEvent) {
				className = 'day event';
			}

			daysArray.push({
				day: i,
				class: className,
				month: month,
				year: year,
			});
		}

		// 달력에서 다음달 회색 처리
		for (let j = 1; j <= nextDays; j++) {
			daysArray.push({
				day: j,
				class: 'day next-date',
				month: month + 1,
				year: month === 11 ? year + 1 : year,
			});
		}

		setDays(daysArray);
	};

	useEffect(() => {
		initCalendar();
	}, [month, year, events]);

	const handlePrevMonth = () => {
		if (month === 0) {
			setYear(year - 1);
			setMonth(11);
		} else {
			setMonth(month - 1);
		}
	};

	const handleNextMonth = () => {
		if (month === 11) {
			setYear(year + 1);
			setMonth(0);
		} else {
			setMonth(month + 1);
		}
	};

	const goToToday = () => {
		const today = new Date();
		setMonth(today.getMonth());
		setYear(today.getFullYear());
		setDate(today);
		setActiveDay(today.getDate());
	};

	const handleGoto = (e) => {
		e.preventDefault();
		const dateInput = dateInputRef.current.value;
		const [inputMonth, inputYear] = dateInput.split('/');

		if (inputMonth > 0 && inputMonth < 13 && inputYear.length === 4) {
			setMonth(parseInt(inputMonth) - 1);
			setYear(parseInt(inputYear));
		} else {
			alert('invalid date');
		}
		dateInputRef.current.value = '';
	};

	const handleDateInput = (e) => {
		const input = e.target;
		input.value = input.value.replace(/[^0-9/]/g, '');
		if (input.value.length === 2 && !input.value.includes('/')) {
			input.value += '/';
		}
		if (input.value.length > 7) {
			input.value = input.value.slice(0, 7);
		}
	};

	const addEvent = () => {
		const eventName = eventTitleRef.current.value;
		const startDate = eventStartDateRef.current.value;
		const endDate = eventEndDateRef.current.value;

		if (eventName === '' || startDate === '' || endDate === '') {
			alert('Please fill all fields');
			return;
		}

		if (new Date(startDate) > new Date(endDate)) {
			alert('End date cannot be earlier than start date');
			return;
		}

		const newEvent = {
			title: eventName,
			startDate,
			endDate,
			day: activeDay,
			month: month + 1,
			year: year,
		};

		const newEvents = [...events];
		const eventExists = events.findIndex(
			(event) =>
				event.title === eventName &&
				event.startDate === startDate &&
				event.endDate === endDate
		);

		if (eventExists >= 0) {
			alert('Event already exists');
			return;
		}

		newEvents.push(newEvent);
		saveEvents(newEvents);
		setIsEventContainerActive(false);

		eventTitleRef.current.value = '';
		eventStartDateRef.current.value = '';
		eventEndDateRef.current.value = '';

		updateSelectedDayEvents(activeDay);
	};

	const updateSelectedDayEvents = (day) => {
		const currentDate = new Date(year, month, day);
		const dayEvents = events.filter((event) => {
			const eventStart = new Date(event.startDate);
			const eventEnd = new Date(event.endDate);
			return currentDate >= eventStart && currentDate <= eventEnd;
		});
		setSelectedDayEvents(dayEvents);
	};

	const handleDayClick = (day, currentMonth, currentYear) => {
		setActiveDay(day);
		setMonth(currentMonth);
		setYear(currentYear);

		// 요일 이름과 날짜 업데이트
		const clickedDate = new Date(currentYear, currentMonth, day);
		const dayName = clickedDate.toLocaleDateString('en-US', {
			weekday: 'short',
		});
		const formattedDate = `${day} ${months[currentMonth]} ${currentYear}`;

		const eventDayElement = document.querySelector('.event-day');
		const eventDateElement = document.querySelector('.event-date');
		if (eventDayElement && eventDateElement) {
			eventDayElement.textContent = dayName;
			eventDateElement.textContent = formattedDate;
		}

		updateSelectedDayEvents(day);
	};
	const handleEditEvent = (event) => {
		// Set the selected event for editing
		setSelectedEvent(event);

		// Open the add-event container with pre-filled values
		setIsEventContainerActive(true);

		// Pre-fill the form fields with the selected event's details
		if (eventTitleRef.current) eventTitleRef.current.value = event.title;
		if (eventStartDateRef.current)
			eventStartDateRef.current.value = event.startDate;
		if (eventEndDateRef.current) eventEndDateRef.current.value = event.endDate;
	};

	const handleDeleteEvent = (event) => {
		// Confirm before deleting the event
		if (window.confirm('Are you sure you want to delete this event?')) {
			// Filter out the deleted event from the events array
			const newEvents = events.filter(
				(e) =>
					e.title !== event.title ||
					e.startDate !== event.startDate ||
					e.endDate !== event.endDate
			);

			// Save the updated events list to state and localStorage
			saveEvents(newEvents);
		}
	};
	return (
		<div className='container'>
			<div className='left'>
				<div className='calendar'>
					<div className='month'>
						<span className='prev' onClick={handlePrevMonth}>
							{'<'}
						</span>
						<div className='date'>
							{months[month]} {year}
						</div>
						<span className='next' onClick={handleNextMonth}>
							{'>'}
						</span>
					</div>
					<div className='weekdays'>
						<div>Sun</div>
						<div>Mon</div>
						<div>Tue</div>
						<div>Wed</div>
						<div>Thu</div>
						<div>Fri</div>
						<div>Sat</div>
					</div>
					<div className='days'>
						{days.map((day, index) => (
							<div
								key={index}
								className={`${day.class} ${
									activeDay === day.day &&
									month === day.month &&
									year === day.year
										? 'active'
										: ''
								}`}
								onClick={() => handleDayClick(day.day, day.month, day.year)}
							>
								{day.day}
							</div>
						))}
					</div>
					<div className='goto-today'>
						<div className='goto'>
							<input
								type='text'
								placeholder='mm/yyyy'
								className='date-input'
								ref={dateInputRef}
								onChange={handleDateInput}
							/>
							<button className='goto-btn' onClick={handleGoto}>
								이동
							</button>
						</div>
						<button className='today-btn' onClick={goToToday}>
							오늘
						</button>
					</div>
				</div>
			</div>
			<div className='right'>
				<div className='today-date'>
					<div className='event-day'></div>
					<div className='event-date'></div>
				</div>

				{/* Display all events continuously */}
				<div className='all-events'>
					<h3>All Events</h3>
					{events.length > 0 ? (
						events.map((event, index) => (
							<div key={index} className='event'>
								<div className='event-info'>
									<div className='event-dates'>
										{new Date(event.startDate).toLocaleDateString()} -{' '}
										{new Date(event.endDate).toLocaleDateString()}
									</div>
									<div className='event-title'>{event.title}</div>
								</div>
								<div className='event-actions'>
									<button
										className='edit-btn'
										onClick={() => handleEditEvent(event)}
									>
										Edit
									</button>
									<button
										className='delete-btn'
										onClick={() => handleDeleteEvent(event)}
									>
										Delete
									</button>
								</div>
							</div>
						))
					) : (
						<div className='no-event'>
							<h3>일정 없음</h3>
						</div>
					)}
				</div>

				{/* Add Event Container */}
				{isEventContainerActive && (
					<div className='add-event-wrapper active'>
						<div className='add-event-header'>
							<div className='title'>일정 추가하기</div>
							<span
								className='close'
								onClick={() => setIsEventContainerActive(false)}
							>
								×
							</span>
						</div>
						<div className='add-event-body'>
							<div className='add-event-input'>
								<input
									type='text'
									placeholder='Event Name'
									className='event-name'
									ref={eventTitleRef}
								/>
							</div>
							<div className='add-event-input'>
								<input
									type='date'
									className='event-date-start'
									ref={eventStartDateRef}
								/>
							</div>
							<div className='add-event-input'>
								<input
									type='date'
									className='event-date-end'
									ref={eventEndDateRef}
								/>
							</div>
						</div>
						<div className='add-event-footer'>
							<button className='add-event-btn' onClick={addEvent}>
								일정 추가하기
							</button>
						</div>
					</div>
				)}
				<button
					className='add-event'
					onClick={() => setIsEventContainerActive(true)}
				>
					+
				</button>
			</div>{' '}
		</div>
	);
};

export default Calendar;
