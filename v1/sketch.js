// 09876543 one planet 2 moons
// 09876542354 just a star 

let starSystemSeed = 1234567890;
let scaler = 0.15;

function setup() {
  canvas = createCanvas(600, 400);
  moveX = createSlider(-10, 1200, -10, 1);
  moveX.position(240, 360);
  moveX.size(300);
  inputBox = createInput("420", "number");
  inputBox.position(20, 20);
  inButton = createButton("go");
  inButton.position(200, 20);
  inButton.mousePressed(setSeed);
  starSystemSeed = 420;
}

function draw() {
  randomSeed(starSystemSeed * scaler);
  let star_size = random(150, 300)
  let star_numOfPlanets = round(random(0, 12));
  background(40);
  strokeWeight(star_size);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  point(0 - moveX.value(), 200);
  let planetDrawDistance = (star_size / 2) + 10 + random(0, 70);
  for (let p = 0; p < star_numOfPlanets; p++) {
    let p_size = random(20, star_size - 100)
    let p_numOfMoons = round(random(0, 4));
    let p_moonDrawDirection = random(-1, 2);
    if (p_moonDrawDirection >= 0){
        p_moonDrawDirection = 1;
        } else {
          p_moonDrawDirection = -1;
        }
    planetDrawDistance = planetDrawDistance + (p_size / 2);
    strokeWeight(p_size);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    point(planetDrawDistance - moveX.value(), 200);
    let moonDrawDistance = (p_size / 2) + 10;
    for (let m = 0; m < p_numOfMoons; m++) {
      let m_size = random(5, p_size - (50 / p_size))
      strokeWeight(m_size);
      stroke(random(0, 255), random(0, 255), random(0, 255));
      moonDrawDistance = moonDrawDistance + (m_size / 2);
      point(planetDrawDistance - moveX.value(), 200 + (moonDrawDistance * p_moonDrawDirection));
      moonDrawDistance = moonDrawDistance + (m_size / 2) + 10 + random(0, 20);
    }
    planetDrawDistance = planetDrawDistance + (p_size / 2) + 10 + random(0, 70);
  }
  strokeWeight(0);
  fill(255);
  textSize(30);
  text(starSystemSeed, 20, 377.5);
}

function setSeed(){
  if (inputBox.value() == "") {
    starSystemSeed = 69;
  } else {
    starSystemSeed = inputBox.value();
    inputBox.value("")
  }
}