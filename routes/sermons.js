const {
    index, show, create, update, destroy
} =
    require('../controllers/sermons');
const passport = require('passport');

module.exports = router => {
    // localhost:4000/sermons
    router.get('/sermons', index);

    // localhost:4000/sermons/98123
    router.get('/sermons/:id', show);

    // localhost:4000/sermons
    router.post('/sermons', passport.authenticate('jwt', { session: false }), create);

    // localhost:4000/sermons/update
    router.post('/sermons/update', passport.authenticate('jwt', { session: false }), update);

    // localhost:4000/sermons/destroy
    router.post('/sermons/destroy', passport.authenticate('jwt', { session: false }), destroy);
};