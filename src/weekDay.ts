import mount from ".";

declare global {
    interface Window {
        weekDay: any;
    }
}

let weekDay = {
    init: function() {
        mount()
    }
}

window.weekDay = weekDay
export default weekDay