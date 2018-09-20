
import { NativeModules, Platform } from 'react-native';

const { RNAtiBiopass } = NativeModules;

const AtiBioPass = {
    store: (data) => {
        return new Promise((resolve, reject) => {
            if (Platform.OS === 'ios') {
                reject("The Operating System is not supported")
            } else {
                RNAtiBiopass.store(data)
                    .then(() => resolve(`data stored!`))
                    .catch((err) => reject(`Failed to store data: ${err}`))
            }
        });
    },
    retreive: () => {
        return new Promise((resolve, reject) => {
            if (Platform.OS === 'ios') {
                reject("The Operating System is not supported")
            } else {
                RNAtiBiopass.retreive("Give us the secret password!")
                    .then((password) => resolve(password))
                    .catch((err) => reject(err))
            }
        });
    },
    delete: () => {
        return new Promise((resolve, reject) => {
            if (Platform.OS === 'ios') {
                reject("The Operating System is not supported")
            } else {
                RNAtiBiopass.delete()
                    .then((password) => resolve("data deleted"))
                    .catch((err) => reject(`Failed to delete data: ${err}`))
            }
        });
    },
};

export default AtiBioPass;

