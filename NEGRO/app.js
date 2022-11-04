/* Shapes */
var svgContainer = document.getElementById('svgContainer');

bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'data.json'
});