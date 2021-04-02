var firebaseConfig = {
    apiKey: "AIzaSyAZWiq025mp7DpWNwrj4o5kuq5rSE60fgA",
    authDomain: "demoproject2-b6295.firebaseapp.com",
    databaseURL: "https://demoproject2-b6295.firebaseio.com",
    projectId: "demoproject2-b6295",
    storageBucket: "demoproject2-b6295.appspot.com",
    messagingSenderId: "236712378709",
    appId: "1:236712378709:web:465f4e9af93ff82d0cafdc"
};
          // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number=document.getElementById('number').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert("Message sent");
    }).catch(function (error) var firebaseConfig = {
    apiKey: "AIzaSyAZWiq025mp7DpWNwrj4o5kuq5rSE60fgA",
    authDomain: "demoproject2-b6295.firebaseapp.com",
    databaseURL: "https://demoproject2-b6295.firebaseio.com",
    projectId: "demoproject2-b6295",
    storageBucket: "demoproject2-b6295.appspot.com",
    messagingSenderId: "236712378709",
    appId: "1:236712378709:web:465f4e9af93ff82d0cafdc"
};
          // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    });
}
function phoneAuth() {
    //get the number
    var number=document.getElementById('number').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert("Message sent");
    }).catch(function (error) {
        alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
        var user=result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}{
        alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
        var user=result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}
