const day = document.querySelector('[data-testid="currentDay"]');

const myTime = function(){
  const now = Date.now();
  document.querySelector('[data-testid="currentTimeUTC"]').innerHTML = now;
};

setInterval(myTime,1000);






day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});
