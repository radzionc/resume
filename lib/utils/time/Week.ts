import { haveEqualFields } from '../record/haveEqualFields'
import {
  endOfISOWeek,
  format,
  getYear,
  setWeek,
  setYear,
  startOfISOWeek,
} from 'date-fns'
import { getWeekIndex } from './getWeekIndex'
import { convertDuration } from './convertDuration'
import { Interval } from '../interval/Interval'

export type Week = {
  year: number
  // week index starts from 0
  week: number
}

export const areSameWeek = <T extends Week>(a: T, b: T): boolean =>
  haveEqualFields(['year', 'week'], a, b)

export const toWeek = (timestamp: number): Week => {
  const weekStartedAt = startOfISOWeek(timestamp).getTime()

  return {
    year: getYear(new Date(weekStartedAt)),
    week: getWeekIndex(weekStartedAt),
  }
}

export const fromWeek = ({ year, week }: Week): number => {
  let date = new Date(year, 0, 1)
  date = setWeek(date, week + 1)
  date = setYear(date, year)

  return startOfISOWeek(date).getTime()
}

export const weekToString = ({ year, week }: Week): string =>
  [week, year].join('-')

export const stringToWeek = (str: string): Week => {
  const [week, year] = str.split('-').map(Number)

  return { week, year }
}

export const formatWeek = (timestamp: number): string => {
  const startedAt = startOfISOWeek(timestamp).getTime()
  return `${format(startedAt, 'd MMM')} - ${format(
    startedAt + convertDuration(6, 'd', 'ms'),
    'd MMM',
  )}`
}

export const getWeekInterval = (timestamp: number): Interval => {
  return {
    start: startOfISOWeek(timestamp).getTime(),
    end: endOfISOWeek(timestamp).getTime(),
  }
}
