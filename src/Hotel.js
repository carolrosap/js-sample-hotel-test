class Hotel {
    constructor () {}
    bestPrice(entry) {
        var options = require("./hotels.json");
        var isReward = entry.match(/(reward|rewards)/gi) ? true : false;
        var nWeekends = this.numberWeekends(entry);
        var numDays = this.numberDays(entry, nWeekends);

        let newHotel = options.map((hotel) => {
            let dairyW = isReward ? hotel.weekendReward * nWeekends : hotel.weekend * nWeekends;
            let dairyD = isReward ? hotel.weekdayReward * numDays : hotel.weekday * numDays;
            return ({
                name: hotel.name,
                classification: hotel.classification,
                weekday: hotel.weekday,
                weekdayR: hotel.weekdayReward,
                weekend: hotel.weekend,
                weekendR: hotel.weekendReward,
                price: dairyW + dairyD
            })
    
        }).sort(
            (i, j) => i.price - j.price || j.classification - i.classification
        );

        //console.log(newHotel);
    
        return newHotel[0].name;
    
    }
    
    numberWeekends(entry) {
        var result = entry.match(/(\(sat\)|\(sun\))+/gi || [])
        if(result == null)
            return 0;
        
        return result.length
    }
    
    numberDays(entry, nWeekends) {
        var days = entry.split(",");
        var numDays = days.length - nWeekends;
        return numDays;
    }
}

// hotel = new Hotel();
// console.log(hotel.bestPrice(entry));

module.exports = Hotel;


