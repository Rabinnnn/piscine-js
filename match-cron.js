function matchCron(str, date) {
    let cron = {};
    str.split(" ").forEach((pos, i) => {
        if (pos === "*") return;
        switch (i) {
            case 0:
                cron.minute = pos;
                break;
            case 1:
                cron.hour = pos;
                break;
            case 2:
                cron.date = pos;
                break;
            case 3:
                cron.month = pos;
                break;
            case 4:
                cron.day = pos;
                break;
        }
    });
    date = {
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: date.getDay(),
    };
    for (let key in cron) {
        if (cron[key] !== date[key].toString()) {
            return false;
        }
    }
    return true;
}