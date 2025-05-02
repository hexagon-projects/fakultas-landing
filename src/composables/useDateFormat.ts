
export function useDateFormat() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      return dateString
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }

    return new Intl.DateTimeFormat('id-ID', options).format(date)
  }

  const formatShortDate = (dateString: string) => {
    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      return dateString
    }

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }

    return new Intl.DateTimeFormat('id-ID', options).format(date)
  }

  return {
    formatDate,
    formatShortDate
  }
}
