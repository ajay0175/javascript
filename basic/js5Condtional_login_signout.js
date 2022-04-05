// Allow user to login with email, facebook and google
//  Allow USer to Logout

var email = true;
var facebook = false;
var google = false;

if(email || facebook || google){
    console.log("Login Success");
}

var Authentication = true;

// if(Authentication){
//     console.log("Show Logout Button");
// } else {
//     console.log("Show Login Option");
// }

// Ternary Operator
Authentication ? console.log("Signout Button") : console.log("Show login button");