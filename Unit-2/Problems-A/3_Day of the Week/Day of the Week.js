function dayOfTheWeek(day, N) {
    var allDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (var i = 0; i < allDay.length; i++) {
        if (day == allDay[i]) {
            console.log(allDay[(i + N) % 7])
        }
    }
}
dayOfTheWeek()