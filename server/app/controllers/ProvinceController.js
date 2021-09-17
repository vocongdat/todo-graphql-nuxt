const Song = require('../models/Song');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/songs
    storedSongs(req, res, next) {
        Promise.all([Song.find({}), Song.countDocumentsDeleted()])
            .then(([songs, deleteCount]) =>
                res.render('me/stored_songs', {
                    deleteCount,
                    songs: multipleMongooseToObject(songs),
                })
            )
            .catch(next);
    }
    // [GET] /me/trash/songs
    trashSongs(req, res, next) {
        Song.findDeleted({})
            .then((songs) =>
                res.render('me/trash_songs', {
                    songs: multipleMongooseToObject(songs),
                })
            )
            .catch(next);
    }
}
module.exports = new MeController();
