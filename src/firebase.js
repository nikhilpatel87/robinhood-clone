import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBu9xrEjdZR4N4oHgZi8zGoUGw7AUYgJKI',
	authDomain: 'robinhood-cln.firebaseapp.com',
	projectId: 'robinhood-cln',
	storageBucket: 'robinhood-cln.appspot.com',
	messagingSenderId: '828297299744',
	appId: '1:828297299744:web:12373481ea0ed500ed3945',
	measurementId: 'G-VXHK069KJR',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
