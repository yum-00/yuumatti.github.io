$(window).on('load', function() {

  var $widget = $('iframe.twitter-timeline');
  var $widgetContents = $widget.contents();
  $widgetContents.find('head').append('<link rel="stylesheet" type="text/css" href="css/test.css">');

});

$("#particle").particleText({
text: "沼津東高校化学部", // 表示させたいテキスト。改行の場合は<br>追加
colors:["#ffffff"],
//colors:["#1C98A4","#16BA9A", "#15B066"], // パーティクルの色を複数指定可能
speed: "slow", // slow, middle, high の3つから粒子が集まる速さを選択
});
