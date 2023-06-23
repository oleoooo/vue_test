var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [ //追加
  { id: 1, name: "john" },
  { id: 2, name: "kevin" },
  { id: 3, name: "yama" },
];
  res.send({ users });
});

module.exports = router;
