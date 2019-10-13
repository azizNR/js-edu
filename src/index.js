/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const maxHours = knowsProgramming ? 800 : 800 + 500;
    let totalHours = 0;
    let totalWeeks = 0;

    while (totalHours < maxHours) {
        totalHours += config[focus];
        totalWeeks++;
    }

    return totalWeeks;
  };
  