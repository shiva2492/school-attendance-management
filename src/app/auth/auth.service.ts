import * as firebase from 'firebase';

export class AuthService {

    signUpStaff(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
            error => console.log(error)
            )

    }

    signUpStudent(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string) {

        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    
    signOut(){
        return firebase.auth().signOut();
    }

}