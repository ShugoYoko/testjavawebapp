var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sql', { title: 'sql_test' });
});

router.post('/answer', function(req, res, next) {
    //res.send(req.body.q1);
    let score=0;
    //問題数
    let problem_count=5;
    let add_score=100/problem_count;
    //点数計算
    if(Number(req.body.q1)===2){score=score+add_score}
    if(Number(req.body.q2)===3){score=score+add_score}
    if(Number(req.body.q3)===4){score=score+add_score}
    if(Number(req.body.q4)===1){score=score+add_score}
    if(Number(req.body.q5)===2){score=score+add_score}
    let strscore=score+"点です。"

    res.render('answer', { title: '結果発表', score:strscore});
  });

module.exports = router;