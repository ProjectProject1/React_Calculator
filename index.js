const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json());

// add folder calcul_project/builds
app.use(express.static('calcul_project/builds'));
// app.use()

const root_data = {
    num: 1
};

// app.get(['/', '/index.html'], function (req, res) {

//     // res.sendFile(__dirname + '/index.html');
//     res.sendFile(__dirname + '/builds/index.html');
//     // res.send('Hello Elastic Beanstalk');
// });

// 01 랜덤 숫자 요청
app.get('/api/req/num', function (req, res) {
    // res.send(1);    
    // const data = {
    //     num: 1
    // }
    // res.setHeader('Content-Type', 'application/json');

    // console.log(data);
    // res.json(JSON.stringify(data));

    res.sendStatus(200);
});

// 02 계산기 데이터 저장
app.post('/api/data/save', function (req, res) {
    // res.send('Hello Elastic Beanstalk');
    const data = req.body;

    // 데이터 저장하기
    console.log(data);
    root_data.num = data.value;

    res.sendStatus(200);
});

// 03 저장된 계산기 데이터 불러오기
app.get('/api/data/req', function (req, res) {

    // 저장된 데이터가 1이다.
    const data = {
        value: root_data.num
    }
    res.setHeader('Content-Type', 'application/json');

    console.log(data);
    res.json(JSON.stringify(data));
});



app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`);
});