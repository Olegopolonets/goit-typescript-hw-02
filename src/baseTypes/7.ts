/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Work {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
enum Rest {
  Saturday,
  Sunday,
}

function isWeekend(day: Work | Rest): string {
  if (day === Rest.Saturday || day === Rest.Sunday) {
    return "Rest is an integral part of human life.";
  } else if (day >= Work.Monday && day <= Work.Friday) {
    return "The main reasons why you need to work: Earnings, Self-fulfillment, Communication, Social importance";
  }
  return "Hmmmmm...";
}
