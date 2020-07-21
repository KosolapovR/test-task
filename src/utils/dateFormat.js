export function DateFormatter() {
    this.format = function (date) {
        let formatter = new Intl.DateTimeFormat('ru-ru', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        });

        const [{ value: dayOfWeek },,{ value: day },,{ value: month },,{ value: year }] = formatter.formatToParts(date );

        return `${day} ${month} ${year}`;
    }
}
