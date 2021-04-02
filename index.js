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


pushData();

function pushData(){
   var id =  firebase.database().ref("Subject").push(
        {
            subjectid: "id",
        }
    );
}

auth();

function auth(){
  setTimeout(function() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
    }  
}

function sendOtp()
{
    var number = "+918459888289";

    firebase.auth().signInWithPhoneNumber(numbe, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      alert("otp sended");
      
    }).catch((error) => {
      
    });
}
