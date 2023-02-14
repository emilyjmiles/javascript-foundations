class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(parNumber) {
    this.handicap += parNumber
    return `I usually shoot a ${this.handicap} on average.`
  }

  playRound(course) {
    if(course.difficulty === 'hard') {
      this.frustration += 500
    }
    if(course.difficulty === 'moderate') {
      this.frustration += 100
    }
  }

  hitTheRange(num) {
    if (num) {
      this.confidence += 10 * num
    } else {
      this.confidence += 10
    }
  }

  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }

  whatYaShoot(num) {
    console.log(this.frustration)
    // if (num < 0) {
    //   console.log('1', this.frustration)
    //   return 'I AM THE GREATEST GOLFER ALIVE!'
    // }
    // if (num === 0) {
    //   this.frustration - 10
    //   console.log('2', this.frustration)
    //   return 'Booyah!'
    // } 
    // if (num > 0) {
    //   console.log('3', this.frustration)
    //   this.frustration + 20
    //   return 'Doh!'
    // }
  }

}

module.exports = Golfer;
