import * as lx from 'luxon';

function getGreeting(name) {
  const currentTime = lx.DateTime.now();
  const currentHour = currentTime.hour;

  let greeting = '';

  if (currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return `${greeting} ${name}`;
}

// Usage:
const greeting = getGreeting('Noah');
console.log(greeting);
