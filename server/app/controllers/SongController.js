const Song = require('../models/Song');
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require('../../util/mongoose');

class SongController {
  // [GET] /songs/:slug
  show(req, res, next) {
    Song.findOne({ slug: req.params.slug })
      .then((song) => {
        res.render('songs/show', {
          song: mongooseToObject(song),
        });
      })
      .catch(next);
  }
  // [GET] /songs/create
  create(req, res, next) {
    res.render('songs/create');
  }
  // [POST] /songs/store
  store(req, res, next) {
    // res.json(req.body);
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const song = new Song(req.body);
    song
      .save()
      .then(() => res.redirect('/me/stored/songs'))
      .catch((next) => {});
  }
  //[POST] /songs/:id/edit
  edit(req, res, next) {
    Song.findById(req.params.id)
      .then((song) =>
        res.render('songs/edit', {
          song: mongooseToObject(song),
        })
      )
      .catch(next);
  }
  //[PUT] /songs/:id
  update(req, res, next) {
    Song.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/songs'))
      .catch(next);
  }
  //[DELETE] /songs/:id
  delete(req, res, next) {
    Song.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  //[DELETE] /songs/:id/force
  forceDelete(req, res, next) {
    Song.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  //[PATCH] /songs/:id/restore
  restore(req, res, next) {
    Song.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  //[POST] /songs/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Song.delete({ _id: { $in: req.body.songIds } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;
      default:
        res.json({ message: 'Action invalid' });
    }
  }
}
module.exports = new SongController();
