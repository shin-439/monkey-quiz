let list = [
["第一回サル会議の日程は？",
"1.12月2日",
"2.12月6日",
"3.11月33日",
"2"],
["(あてはめ問題)サル教信条：我々は~~~。他には決して屈することは無い。",
"1.高貴な誇るべき生き物",
"2.高貴な猿",
"3.Crazy Monkey",
"1"],
["あてはめ問題　Kザルの迷言：石~~~",
"1.美味しいは",
"2.こんにちは",
"3.飛ばないは",
"3"]
];

let queen = new Audio('monkey.m4a');

let reload = document.getElementById('reload');
reload.addEventListener ('click',function(){
  window.location.reload();
});
// 問題を表示するオブジェクトを取得
let Q = document.getElementById('question');
let A1 = document.getElementById('choices1');
let A2 = document.getElementById('choices2');
let A3 = document.getElementById('choices3');

// 正解数
let correct = 0;

// 現在の問題数
let qCount = 0;

// 問題を表示
function qSet() {
  Q.textContent = list[qCount][0];
  A1.textContent = list[qCount][1];
  A2.textContent = list[qCount][2];
  A3.textContent = list[qCount][3];
};

qSet();

// 回答ボタン
function ansCheck(ans) {
  if(ans == list[qCount][4]) {
    queen.play();
    alert("正解!")
    correct++;
  } else {
    queen.play();
    alert("不正解,,,")
  }
  qCount ++;
  if(qCount == list.length) {
    const persent = correct / qCount;
    question.textContent = "問題は以上です。結果：" + correct + "/" + qCount ;
    A1.textContent = "";
    A2.textContent = "";
    A3.textContent = "";

  } else {
    qSet();
  }
}
