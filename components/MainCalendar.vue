<template>
  <div class="calendar-month">
    <div class="calendar-month-header">
      <CalendarDateIndicator
        :selected-date="selectedDate"
        class="calendar-month-header-selected-month"
      />
      <CalendarDateSelector
        :current-date="today"
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
      <button @click="$store.commit('setShowAddEventModal', true)">
        Add Appointment
      </button>
    </div>

    <CalendarWeekdays />

    <ol class="days-grid">
      <CalendarMonthDayItem
        v-for="day in findEvent"
        :key="day.date"
        :day="day"
        :isToday="day.date === today"
      />
    </ol>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import CalendarDateIndicator from './CalendarDateIndicator.vue'
import CalendarDateSelector from './CalendarDateSelector'
import CalendarMonthDayItem from './CalendarMonthDayItem.vue'
import CalendarWeekdays from './CalendarWeekdays.vue'
import ModalEvent from './ModalEvent.vue'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

export default {
  name: 'MainCalendar',

  components: {
    CalendarDateIndicator,
    CalendarDateSelector,
    CalendarMonthDayItem,
    CalendarWeekdays,
    ModalEvent,
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
    if (this.findEvent.length > 0) {
      console.log('am i defined or not bitch', this.events)
    } else {
      console.log('no you are not a bitch')
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
  watch: {
    count(newCount, oldCount) {
      console.log(`We have ${newCount} events, yay!`)
      console.log(this.$store.state.addEvent)
    },
  },

  methods: {
    getWeekday(date) {
      // console.log(date)
      return dayjs(date).weekday()
    },

    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate
    },
  },
}
</script>

<style lang="scss" scoped>
.calendar-month {
  position: relative;
  background-color: white;
  border: solid 1px var(--grey-300);
}
.day-of-week {
  color: var(--grey-800);
  font-size: 18px;
  background-color: #fff;
  padding-bottom: 5px;
  padding-top: 10px;
}

.day-of-week,
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-of-week > * {
  text-align: right;
  padding-right: 5px;
}

.days-grid {
  height: 100%;
  position: relative;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  border-top: solid 1px var(--grey-200);
}
button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
}
</style>
