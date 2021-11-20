let firebaseConfig = {
  apiKey: 'AIzaSyBM4MO8R3AoByp3nLoGDHxrGH2XozVFjpc',
  authDomain: 'kasomizmi.firebaseapp.com',
  projectId: 'kasomizmi',
  storageBucket: 'kasomizmi.appspot.com',
  messagingSenderId: '977283406265',
  appId: '1:977283406265:web:87b36d91365e34ef2b7e68',
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
