//Controls model settings

class Settings {
    constructor(numOfPeriods, contributionIncreaseRate, growthRate) {
        //TODO: Add validation
        this.numOfPeriods = numOfPeriods;
        this.contributionIncreaseRate = contributionIncreaseRate;
        this.growthRate = growthRate;
    }
}