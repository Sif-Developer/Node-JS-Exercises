const Logger = require('logplease');

const options = {
    useColors: true,     // Enable colors
    color: Logger.Colors.Magenta, // Set the color of the logger
    showTimestamp: false, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };

const logger = Logger.create('info',options);

const esPar = (numero) =>{
    if (numero % 2 == 0) {       
        return logger.info(`Es un número par!!`,true)
    }
    else {       
        return logger.error(`Es un número impar!!`,false)
    }
} 

// console.log(esPar(3)) // false
// console.log(esPar(2)) //true

module.exports = {
    esPar,
}



