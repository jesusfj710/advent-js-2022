export function countHours(year: number, holidays: string[]): number {

    /*
    Type	    Example
    ISO Date	`"2015-03-25"` (The International Standard)
    Short Date	`"03/25/2015"`
    Long Date	`"Mar 25 2015"` or `"25 Mar 2015"`
    */

    let extraHours = 0;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    holidays.forEach(holiday => {
        const holidayDate = new Date(`${holiday}/${year}`);
        if (holidayDate.getDay() > 0 && holidayDate.getDay() < 6) {
            extraHours += 2;
        }
    });

    return extraHours
}
