  document.getElementById('year').textContent = new Date().getFullYear();

  var clockEl = document.getElementById('clock');
  function tick(){
    var d = new Date();
    clockEl.textContent = d.toTimeString().slice(0,8);
  }
  tick(); setInterval(tick, 1000);

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var lights = document.querySelectorAll('#heroLights .light');
  if(reduceMotion){
    lights.forEach(function(l){ l.classList.add('go'); });
  } else {
    lights.forEach(function(light, i){
      setTimeout(function(){ light.classList.add('on'); }, 260 + i*260);
    });
    setTimeout(function(){
      lights.forEach(function(l){ l.classList.remove('on'); l.classList.add('go'); });
    }, 260 + lights.length*260 + 420);
  }

  var revealEls = document.querySelectorAll('.reveal');
  if(reduceMotion){
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  } else if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.15});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  }
