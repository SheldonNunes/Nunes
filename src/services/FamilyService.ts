import config from './configs/family_config.json'

function getFortnightNumber() {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate.getTime() - startDate.getTime()) /
        (24 * 60 * 60 * 1000));
    
    return Math.ceil(days / 14);
  }
  
export default function getCurrentHost() {
    let fornightNumber = getFortnightNumber()
    const offset = (fornightNumber % config.family.length) + config.offset
    return config.family[offset];
  }