import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from "firebase/database"

const firebaseConfig = {
  databaseURL: "https://challenge-greydive-d845-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export const setData = async inputValues => {
  set(ref(db, 'users/' + inputValues.full_name), {
    full_name: inputValues.full_name,
    email: inputValues.email,
    birth_date: inputValues.birth_date,
    country_of_origin: inputValues.country_of_origin,
    terms_and_conditions: inputValues.terms_and_conditions,
  });
};

export const getData = async (fullName, setAnswers, setKeys) => {
  const dbRef = ref(db);
  get(child(dbRef, `users/${fullName.split('_').join(' ')}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        const data = snapshot.val();
        setAnswers(data);
        setKeys(Object.keys(data));
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};
