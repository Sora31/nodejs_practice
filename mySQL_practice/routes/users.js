var express = require('express');
var { User, sequelize } = require('../models');

var router = express.Router();

/* use promise */
router.get('/', function(req, res, next) {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function(req, res, next) {
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

/* use async/await */
// router.get('/', async (req, res, next) => {
//   try{
//   const users = await User.findAll();
//   res.json(users);
//   } catch(err) {
//     console.error(err);
//     next(err);
//   }
// })
// router.post('/', async (req, res, next) => {
//   try {
//     const result = await User.create({
//       name: req.body.name,
//       age: req.body.age,
//       married: req.body.married,
//     })
//     console.log(result);
//     res.status(201).json(result);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });


router.delete('/:id', (req, res, next) => { //users table 삭제 후 재생성(현재 댓글 삭제하면 유저가 지워지고 테이블 재생성 안됨, sequelize.js (/users/ -> /comments))
  async function drop_and_create(sequelize) {
    try {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
      await sequelize.query('DROP TABLE users')
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    } catch (err) {
      console.log('삭제 실패?! ', err);
      next(err);
    }
  }
  drop_and_create(sequelize);
})

module.exports = router;
