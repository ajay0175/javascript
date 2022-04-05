// Creating a application with following  roles:
// Admin - get full access 
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets acces to consume content

var user = "subadmin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    
    case "testprep":
        console.log("gets access to create/delete tests");
        break;

    case "user":
        console.log("gets access to consume courses");
        break;

    default:
        console.log("Trail User");
        break;
}