export interface ICoop{
    name: string,
    eggCollects: {string: number},
    eggsByWeek: number,
    allFeedingsHistory: string[],
    thermometerIp?: string,
    thermometerApiKey?: string
}