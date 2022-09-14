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
      <button @click="modalEvent = true">Add Appointment</button>

      <ModalEvent v-show="modalEvent" @closeModal="modalEvent = false" />
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
import axios from 'axios'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

export default {
  name: 'CalendarMonth',

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
      events: [],
    }
  },
  created() {
    const getEvents = async () => {
      const { data: events } = await axios.get(
        'https://localhost:7101/api/Events'
      )

      console.log(events)

      this.events = events
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
    findEvent() {
      const events = this.events
      const days = this.days

      const newarray = []

      days.map((d) => {
        if (
          events.some((e) => dayjs(e.startDate).format('YYYY-MM-DD') === d.date)
        ) {
          const event = events.find(
            (e) => dayjs(e.startDate).format('YYYY-MM-DD') === d.date
          )
          newarray.push({ event, date: d.date })
        } else {
          newarray.push({ date: d.date })
        }
      })

      return newarray
    },

    today() {
      return dayjs().format('YYYY-MM-DD')
    },
    banan() {
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
    async getEvents() {
      const resp = await axios.get('https://localhost:7101/api/Events', {
        events: this.events,
      })

      console.log(resp.data[0].startDate)
    },

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

<style scoped>
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
