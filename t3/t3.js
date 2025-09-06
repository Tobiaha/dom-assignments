'use strict';

const target = document.getElementById('target');

const browserInf = () => {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';

  if (userAgent.includes('Firefox')) {
    browserName = 'Mozilla Firefox';
    browserVersion = userAgent.match(/Firefox\/([0-9.]+)/)[1];
  } else if (userAgent.includes('Edg')) {
    browserName = 'Microsoft Edge';
    browserVersion = userAgent.match(/Edg\/([0-9.]+)/)[1];
  } else if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    browserName = 'Google Chrome';
    browserVersion = userAgent.match(/Chrome\/([0-9.]+)/)[1];
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browserName = 'Safari';
    browserVersion = userAgent.match(/Version\/([0-9.]+)/)[1];
  }

  return `${browserName} ${browserVersion}`;
};

const getOS = () => {
  const platform = navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'Windows';
  if (platform.includes('mac')) return 'Mac OS';
  if (platform.includes('linux')) return 'Linux';
  if (/iphone|ipad|ipod/.test(platform)) return 'iOS';
  if (/android/.test(platform)) return 'Android';
  return 'Unknown OS';
};
// how to convert to 1. syyskuuta 2020 format
const finnishTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-En', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const info = [
  `Browser: ${browserInf()}`,
  `Operating System: ${getOS()}`,
  `Screen width: ${window.screen.width}px`,
  `Screen height: ${window.screen.height}px`,
  `Available screen width: ${window.screen.availWidth}px`,
  `Available screen height: ${window.screen.availHeight}px`,
  `Current date and time: ${finnishTime()}`,
];

info.forEach(item => {
  const p = document.createElement('p');
  p.textContent = item;
  target.appendChild(p);
});
