import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
dayjs.extend(customParseFormat)

export const DJS = dayjs

export const format = 'YYYY-MM-DD'

export const isValidBirthday = (birthday: string) => {
  const date = DJS(birthday, format)
  const now = DJS()
  return date.isValid() && date.isAfter(now.subtract(100, 'years')) && date.isBefore(now.subtract(18, 'years'))
}
