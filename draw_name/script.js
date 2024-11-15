const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 캔버스 크기 설정
canvas.width = 1200;
canvas.height = 600;

ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(250, 200);
ctx.lineTo(150, 300);
ctx.moveTo(300, 180);
ctx.lineTo(300, 320);
ctx.moveTo(300, 250);
ctx.lineTo(340, 250);
ctx.stroke();
ctx.beginPath();
ctx.arc(240, 350, 45, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 200);
ctx.lineTo(500, 200);
ctx.lineTo(500, 350);
ctx.lineTo(600, 350);
ctx.moveTo(650, 190);
ctx.lineTo(650, 360);
ctx.moveTo(650, 275);
ctx.lineTo(700, 275);
ctx.moveTo(700, 190);
ctx.lineTo(700, 360);
ctx.stroke();

ctx.beginPath();
ctx.arc(900, 225, 45, 0, Math.PI * 2);
ctx.moveTo(900, 270);
ctx.lineTo(900, 300);
ctx.moveTo(820, 300);
ctx.lineTo(980, 300);
ctx.moveTo(980, 180);
ctx.lineTo(980, 350);

ctx.moveTo(980, 280);
ctx.lineTo(1020, 280);

ctx.moveTo(850, 320);
ctx.lineTo(850, 380);
ctx.lineTo(990, 380);
ctx.stroke();




// 이름 '강대완'을 이렇게 형성해볼 수 있음!
