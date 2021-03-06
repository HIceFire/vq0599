export const timeFormat = (ts, format = 'Y-M-D') => {
  const date = ts instanceof Date ? ts : new Date(ts)
  const t = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  }

  return format.replace(/([YMDhms])/g, function (key) {
    return t[key] < 10 ? `0${t[key]}` : t[key]
  })
}
