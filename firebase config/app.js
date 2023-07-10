import {auth,db,createUserWithEmailAndPassword,setDoc,doc} from './firebase.config.js'

const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const signbtn = document.querySelector('.sign-btn')
// console.log(firstname,lastname,email,password)



async function signbtnhandler(){
    // console.log(signbtnhandler)
    try {
        const response = await  createUserWithEmailAndPassword(auth, email.value, password.value)
        console.log(response);
        if(response){
            console.log(response.user)
            adduserhandler(response.user.uid)
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
    }
}
    
    async function adduserhandler(uid) {
        try {
        const response = await setDoc(doc(db, "users", uid), {
            firstname : firstname.value,
            lastname : lastname.value,
            email: email.value,
            password: password.value,
            uid
        });
        
        window.location.href = './login/login.html'
    } catch (e) {
        console.error(e);
    }
}
signbtn.addEventListener('click', signbtnhandler)