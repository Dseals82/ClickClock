const sec = document.querySelector('.second');
const min = document.querySelector('.minute');
const hr = document.querySelector('.hour');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60)* 360) + 90;
  sec.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60)* 360)+ ((seconds/60)*6) + 90;
  min.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = ((hours / 12)* 360)+((minutes/60)*30) + 90;
  hr.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();
