const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' '
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const nowTime = () => {
  let dd = new Date()
  return formatTime(dd)
}
const nowDate = () => {
  let dd = new Date()
  return formatDate(dd)
}

const preDate = () => {
  let dd = new Date(new Date() - 24*3600*1000)
  return formatDate(dd)
}
module.exports = {
  formatTime: formatTime,
  nowDate:nowDate,
  preDate:preDate,
  nowTime
}
