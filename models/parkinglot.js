const mongoose = require('mongoose')

const parkingLotSchema = new mongoose.Schema({

    carNumber: {
        type: String,
        required: true
      },
      slotNumber: {
        type: String,
        required: true
      },
      parkinglot: {
        type: String,
        required: true
      }

})

module.exports = mongoose.model('ParkingLotManagement', parkingLotSchema)