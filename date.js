
exports.getDate = function getDate() {

    let today = new Date();
;
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", option);


}

exports.getDay = function getDay() {

    let today = new Date();
;
    let option = {
        weekday: "long"
    }
    return today.toLocaleDateString("en-US", option);

}