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
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': function(response) {
            console.log("success", response);

             firebase.auth().signInWithPhoneNumber("+918459888289", window.recaptchaVerifier)
            .then((confirmationResult) => {

                console.log("otp send");
                console.log(confirmationResult);
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              // ...
            }).catch((error) => {
                console.log(error);
              // Error; SMS not sent
              // ...
            });
        },
        'expired-callback': function() {
            console.log("expired-callback");
        }
    });

    recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaWidgetId = widgetId;
    });
  },2000);


 
}
