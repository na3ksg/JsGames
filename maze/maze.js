//変数の初期化
var cvMain;//キャンバス
var ctx;//描画用コンテキスト
var width = 33,height = 33;//迷路の広さ
var maze = [];迷路データ
var px,py;//プレイヤーの座標
var keyDir = {//押されたキーの向き
	38:[0,-1],40:[0,1],//up down
	37:[-1,0],39:[1,0],//left right
	75:[0,-1],74:[0,1],//j k
	72:[-1,0],76:[1,0]//hl
};
//ブロックの色
var blockColor = ["white","black","yellow"];