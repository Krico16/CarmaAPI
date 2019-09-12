var express = require('express');
var router = express.Router();
var fb = require('firebase-admin');

/* GET home page. */
router.get('/', async function (req, res, next) {
  var Todo = [];

  try {
    var AllGames = await fb.firestore().collection('/Games/yU6CpTHmpn3MiaB14bQd/lista').get();
    AllGames.forEach(doc => {
      //console.log(doc.id);
      //let t = Date.parse(doc.data().date._seconds);
      //let rel = new Date(t).toLocaleDateString();
      Todo.push({
        id: doc.id,
        data: {
          name: doc.data().name,
          info: doc.data().info,
          release: doc.data().date,
          price: doc.data().price,
          language: "Faltan la api",
          company: "Faltan la api" 
        }
        //, todo: doc.data()
      });
    });
    res.json(Todo);

  } catch (error) {
    res.status(200).json({Res: "No hay datos."});
  }
});

module.exports = router;