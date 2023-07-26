const fs = require('fs');

const writeMessage = (message) => {

    const jsonString = JSON.stringify(message, null, 2); 

    fs.writeFile("./src/assets/messages.json", jsonString, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('JSON data has been saved to data.json');
        }
      });
}

export default writeMessage;