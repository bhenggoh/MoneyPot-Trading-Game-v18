function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ncqOO5L1HM":
        Script1();
        break;
      case "5gSyqf7GlbA":
        Script2();
        break;
      case "5bhm7grMIgK":
        Script3();
        break;
      case "6qBJ5RQl2Mi":
        Script4();
        break;
      case "6KPJnWMKYSA":
        Script5();
        break;
      case "6Vazn5PPrBG":
        Script6();
        break;
      case "5xrtifyxvMi":
        Script7();
        break;
      case "68mZIfbX8GR":
        Script8();
        break;
      case "5i2KVGHbJsA":
        Script9();
        break;
      case "5UqTdQYVmfI":
        Script10();
        break;
      case "60ARO0WwDnE":
        Script11();
        break;
      case "5fe86BgMFLN":
        Script12();
        break;
      case "5Yd1aPCHlZQ":
        Script13();
        break;
      case "5aIdJe7czSu":
        Script14();
        break;
      case "6cWfuDS9H9K":
        Script15();
        break;
      case "69qgULsDLVT":
        Script16();
        break;
      case "5XRGJVYHtGd":
        Script17();
        break;
      case "5sH2oi66AoC":
        Script18();
        break;
      case "6KCRl7KAamP":
        Script19();
        break;
      case "63MSikl6MX7":
        Script20();
        break;
      case "6A8iHjswroc":
        Script21();
        break;
      case "5UyWp84MH9X":
        Script22();
        break;
      case "6bRVPiyKY8g":
        Script23();
        break;
      case "6ftLRRca21f":
        Script24();
        break;
      case "5ne3Q4Vo8wq":
        Script25();
        break;
      case "6WJRt6M9dYG":
        Script26();
        break;
      case "6726NETlEXI":
        Script27();
        break;
      case "5cbNwAe5bLf":
        Script28();
        break;
      case "5dzZ0sB6zJ2":
        Script29();
        break;
      case "6ElgHE8HkPL":
        Script30();
        break;
      case "6kmplvvQLJM":
        Script31();
        break;
      case "5YYp3beNG8s":
        Script32();
        break;
      case "6MxlhqZMLwn":
        Script33();
        break;
      case "6gh15hor0wX":
        Script34();
        break;
      case "6DLG7RYzwmr":
        Script35();
        break;
      case "6LxfrBAJXQG":
        Script36();
        break;
      case "6QQKGbVI2Hy":
        Script37();
        break;
      case "5edOLj9Jlka":
        Script38();
        break;
      case "6eerssBEf4y":
        Script39();
        break;
      case "6HYyZMS8dlx":
        Script40();
        break;
      case "6qWJSUF9fuq":
        Script41();
        break;
      case "5drP2ThS0fQ":
        Script42();
        break;
      case "6UNdLX2AMNF":
        Script43();
        break;
      case "5t6UYEAva29":
        Script44();
        break;
      case "6OtSlDUt3Bw":
        Script45();
        break;
      case "5vrxDjNRDV8":
        Script46();
        break;
      case "5w4IElFWyVG":
        Script47();
        break;
      case "6jNPeFnxxgy":
        Script48();
        break;
      case "5xrODWEOP5e":
        Script49();
        break;
      case "640fxbQAhDU":
        Script50();
        break;
      case "5gyNRqamboS":
        Script51();
        break;
      case "5hMwaRpKF63":
        Script52();
        break;
      case "6JZxAQY0xfH":
        Script53();
        break;
      case "5xc6mCZOTmH":
        Script54();
        break;
      case "6mzpG8GM2QI":
        Script55();
        break;
      case "5sFF5EOgws7":
        Script56();
        break;
      case "6VjYU0MGfaD":
        Script57();
        break;
      case "6oVcWb3ere8":
        Script58();
        break;
      case "5mHZCZddhNj":
        Script59();
        break;
      case "6WhiHxV2Zqy":
        Script60();
        break;
      case "6dxUCw5OH3S":
        Script61();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6NOVPb8Gdrf');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6c1OWHpcU0T';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '6WqpUhXimFK';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '65iDGqJNrQm';
const teeterAmount = 10;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '67OLepqS5yM';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6St7g1WZCyJ');
const duration = 1000;
const easing = 'ease-out';
const id = '5Wo6yK09rGR';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('6St7g1WZCyJ');
const duration = 1000;
const easing = 'ease-out';
const id = '5Wo6yK09rGR';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6aVwvk2iRLy');
const duration = 1000;
const easing = 'ease-out';
const id = '6W6l26AfBuW';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6aVwvk2iRLy');
const duration = 1000;
const easing = 'ease-out';
const id = '6W6l26AfBuW';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6I38FqlkoQD');
const duration = 1000;
const easing = 'ease-out';
const id = '63gEoze1xIJ';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('6I38FqlkoQD');
const duration = 1000;
const easing = 'ease-out';
const id = '63gEoze1xIJ';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5X65KfbrmXZ');
const duration = 1000;
const easing = 'ease-out';
const id = '6KGqHGPNeeh';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('5X65KfbrmXZ');
const duration = 1000;
const easing = 'ease-out';
const id = '6KGqHGPNeeh';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('67ebEyNPvWW');
const duration = 1000;
const easing = 'ease-out';
const id = '6qx2JccdJ1M';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('67ebEyNPvWW');
const duration = 1000;
const easing = 'ease-out';
const id = '6qx2JccdJ1M';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('5VUm13s6LTF');
const duration = 1000;
const easing = 'ease-out';
const id = '5Xdeqvdg5Pn';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('5VUm13s6LTF');
const duration = 1000;
const easing = 'ease-out';
const id = '5Xdeqvdg5Pn';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6aY7SWb3R5m');
const duration = 750;
const easing = 'ease-out';
const id = '6dDriqt6ub1';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
