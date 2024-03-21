import { create } from 'zustand'
import { INITIAL_EVENTS } from '../data'
const useCalendar = create((set) => ({
    currentsEvents: INITIAL_EVENTS,
    setCurrentEvents: (events) => set({ currentsEvents: events })

}))
export default useCalendar