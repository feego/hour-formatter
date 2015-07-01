/**
 *
 * Registration of polymer hour-formatter custom element.
 * ECMAScript 6 - using BabelJS traspiler.
 */
let twoDigits = (n) => {
    return n > 9 ? "" + n: "0" + n;
}
Polymer('hour-formatter', {
	dateIsoChanged() {
        let date = new Date(this.dateIso)
        this.hour = `${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}`
    }
})