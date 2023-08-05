function oneDayExpDay() {
    const cd = new Date(Date.now() + 86400000);
    return `${cd.getFullYear()}-${cd.getMonth()+1}-${cd.getDate()} ${cd.getHours()}:${cd.getMinutes()}:${cd.getSeconds()}`;
}

export default oneDayExpDay;