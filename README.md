
# ati-biopass

## Getting started

> `npm install ati-biopass --save`  
> `react-native link ati-biopass`

## Usage
```javascript
import AtiBioPass from 'ati-biopass';

// Store a password for future retreival
AtiBioPass.store("secret")
  .then(() => console.log(`Data stored!`))
  .catch((error) => console.log(`Failed to store data: ${error}`)
 
// Retreive a stored password (will trigger Fingerprint)
AtiBioPass.retreive()
  .then((success) => console.log(success))
  .catch((error) => console.log(`Failed to retreive data: ${error}`)
 
// Delete the stored password
AtiBioPass.delete()
  .then(() => console.log(`Data deleted!`))
  .catch((error) => console.log(`Failed to delete data: ${error}`)
```
  