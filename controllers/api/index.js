const router = require('express').Router();
const blogRoutes = require('./blog-routes');
const userRoutes = require('./user-routes');
const tagRoutes = require('./tag-routes');

router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
