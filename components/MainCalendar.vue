<template>
  <div class="h-screen  pt-24 w-full">
    <div class="flex sm:flex-row justify-between mb-5">
      
      <CalendarDateIndicator 
        :selected-date="selectedDate"
        :current-date="today"
        @dateSelected="selectDate"
        class="text-center"
      />
      <div class="hidden sm:block">
        <Button
          buttonText="Add Appointment"
          @clicked="$store.commit('setShowAddEventModal', true)"
        />
      </div>
   
    </div>
    
    <div class="mt-5 justify-end">
    <CalendarWeekdays />

    <ol class="grid grid-cols-7 items-end" >
      <CalendarMonthDayItem
        v-for="day in findEvent"
        :key="day.date"
        :day="day"
        :isToday="day.date === today"
      />
    </ol>
  </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import CalendarDateIndicator from './CalendarDateIndicator.vue'

import CalendarMonthDayItem from './CalendarMonthDayItem.vue'
import CalendarWeekdays from './CalendarWeekdays.vue'
import ModalEvent from './ModalEvent.vue'
import Button from './Button.vue'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

export default {
  name: 'MainCalendar',

  components: {
    CalendarDateIndicator,

    CalendarMonthDayItem,
    CalendarWeekdays,
    ModalEvent,
    Button,
  },

  data() {
    return {
      selectedDate: dayjs(),

      modalEvent: false,
      events: this.$store.getters.getEvents,
      // componentKey: 0,
    }
  },

  created() {
    const getEvents = async () => {
      await this.$store.dispatch({ type: 'fetchEvents' })

      this.events = this.$store.getters.getEvents
    }

    getEvents()
  },

  computed: {
    days() {
      return [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays,
      ]
    },
    count() {
      return this.$store.state.events.length
    },
    findEvent() {
      const days = this.days
      const events = this.$store.getters.getEvents

      const dayArray = []

      days.map((d) => {
        if (events) {
          if (
            events.some(
              (e) => dayjs(e.eventDate).format('YYYY-MM-DD') === d.date
            )
          ) {
            const event = this.events.find(
              (e) => dayjs(e.eventDate).format('YYYY-MM-DD') === d.date
            )
            dayArray.push({ event, date: d.date })
          } else {
            dayArray.push({ date: d.date })
          }
        }
      })
      return dayArray
    },

    today() {
      return dayjs().format('YYYY-MM-DD')
    },

    month() {
      return this.selectedDate.format('M')
    },

    year() {
      return this.selectedDate.format('YYYY')
    },

    numberOfDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth()
    },

    currentMonthDays() {
      return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
            'YYYY-MM-DD'
          ),
          isCurrentMonth: true,
        }
      })
    },

    previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      )
      const previousMonth = dayjs(`${this.year}-${this.month}`).subtract(
        1,
        'month'
      )

      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6

      const previousMonthLastMondayDayOfMonth = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
        .date()

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() + 1}-${
                previousMonthLastMondayDayOfMonth + index
              }`
            ).format('YYYY-MM-DD'),
            isCurrentMonth: false,
          }
        }
      )
    },

    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      )

      const nextMonth = dayjs(`${this.year}-${this.month}`).add(1, 'month')

      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format('YYYY-MM-DD'),
          isCurrentMonth: false,
        }
      })
    },
  },

  methods: {
    getWeekday(date) {
      return dayjs(date).weekday()
    },

    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate
    },
  },
}
</script>
