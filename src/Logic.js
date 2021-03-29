import { CollectionReference, DocumentReference } from '@firebase/firestore-types';
import firebase from 'firebase/app';
import 'firebase/firestore';

//const root = firebase.firestore();

export default {
    getAircraft: function () { },
    getRentalsOnDate: function (date, aircraft) {
        console.log(date);
        console.log(aircraft);
    },
    addRental: function (aircraft, startTime, endTime) {
        console.log(aircraft);
        console.log(startTime);
        console.log(endTime);
    },
    isSignedIn: function () {
        return true;
    },
};