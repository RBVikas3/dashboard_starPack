import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid'
import './Calendar..css'
import useCalendar from "../../store/Calender"
import { createEventId } from '../../data'
const Calendar = () => {
    const { currentEvents, setCurrentEvents } = useCalendar()
    const handleEvents = async (events) => {
        await Promise.resolve(setCurrentEvents(events))
    }
    const handleDatesSelect = (selectInfo) => {
        let title = prompt("Please enter a title for the event")
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
    }
    const handleEventClick = (clickInfo) => {
        if (confirm("Are you sure want to delete this event?")) {
            clickInfo.event.remove()
        }
    }
    return (
        <div className="calender-container">
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    headerToolbar={{
                        left: "prev, next, today",
                        center: "title",
                        right: "dayGridMonth, timeGridWeek, timeGridDay"
                    }}
                    allDaySlot={false}
                    initialView='timeGridWeek'
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEventRows={true}
                    weekends={true}
                    nowIndicator={true}
                    initialEvents={currentEvents}
                    eventsSet={handleEvents}
                    select={handleDatesSelect}
                    eventClick={handleEventClick}

                />
            </div>
        </div>
    )
}

export default Calendar