const Dev = require('../models/Dev')
const ParseStringToArray = require('../utils/parseStringAsArray')

module.exports = {

    async index(req, res) {
       const {latitude, longitude, techs} = req.query

       const techsArray = ParseStringToArray(techs)

       const devs = await Dev.find({
          techs: {
              $in: techsArray,
          }, 
          location: {
              $near: {
                  $geometry: {
                      type: 'Point',
                      coordinates: [longitude, latitude],
                  },
                  $maxDistance: 1000,
              }
          }
       })
       

       return res.json({devs})
    }

}