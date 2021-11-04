let _counter = 0;
let box = document.querySelector('.content');
let {width, height} = box.getBoundingClientRect();

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  
  return Math.round(rand);
}




class Tank {
  _element = null;
  
  
  color = 'green';
  pos = [0, 0];
  speed = [0, 0];
  size = [100, 60];
  
  
  
  
  element_create() {
    this._element = document.createElement('div');
    this._element.style.left = this.pos[0] + 'px';
    this._element.style.top = this.pos[1] + 'px';
    this._element.style.width = this.size[0] + 'px';
    this._element.style.height = this.size[1] + 'px';
    this._element.style.background = this.color;
    this._element.style.position = 'relative';
    this._element.style.margin = '5px';
    
    document.body.firstElementChild.append(this._element);
  }
  
  
  constructor() {
    
  }
  
  
  move() {
    this.pos[0] += this.speed[0];
    this.pos[1] += this.speed[1];
    this._element.style.left = this.pos[0] + 'px';
    this._element.style.top = this.pos[1] + 'px';
    
    if (this.pos[0] < 0 || this.pos[0] > width) {
      this.speed[0] = -this.speed[0];
    }
    
    if (this.pos[1] < 0 || this.pos[1] > height) {
      this.speed[1] = -this.speed[1];
    }
  }
}



function element_create(count) {
  let color = ['blue', 'red', 'green', 'orange', 'yellow', 'pink']
  


  
  if (count < 2) {
    _counter++
    
    window['tank_' + (_counter)] = new Tank();
    window['tank_' + (_counter)].color = color[random(0, color.length)];
    window['tank_' + (_counter)].speed = [random(10, (_counter * 10)), random(10, (_counter * 10))];
    window['tank_' + (_counter)].pos = [random(0, width), random(0, height)];
    window['tank_' + (_counter)].element_create();
  }
    else {
      for (let i = 0; i < count; i++) {
        _counter++
      
        window['tank_' + (_counter)] = new Tank();
        window['tank_' + (_counter)].color = color[i];
        // window['tank_' + (_counter)].speed = [1, 0];
        window['tank_' + (_counter)].speed = [random(10, (_counter * 10)), random(10, (_counter * 10))];
        window['tank_' + (_counter)].pos = [random(0, width), random(0, height)];
        window['tank_' + (_counter)].element_create();
      }
    }
  
  
  console.log(_counter)
}




function render() {
  for (let i = 0; i < _counter; i++) {
    window['tank_' + (i + 1)].move();
  }
}

function element_render(count) {
  element_create(count);
  setInterval(() => render (_counter), 1000 / 60);
}

function remove(item_name) {
  item_name.remove();
  _counter - 1;
  element_render(1);
}




element_render(3);
