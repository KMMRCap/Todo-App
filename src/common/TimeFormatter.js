export const stopWatchFormatter = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
}

export const createdTimeFormatter = (date) => {
    const todoDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    const todoTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // const todoTime = date.toLocaleTimeString();

    return `${todoDate} - ${todoTime}`
}

export const handleClear = () => {
    clearInterval()
}