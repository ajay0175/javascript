/*
Define a function that can answer the role of user.

Creating a application with following  roles:
Admin - get full access 
subadmin - gets access to create/delete courses
testprep - gets access to create/delete tests
user - gets acces to consume content
other - trail user.

Input: get_user_Roles(name, role)
*/ 

var get_user_Roles = function (name, role){
    
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses`
            break;
        case "testprep":
            return `${name} is a testprep with access to create/delete tests`
            break;
        case "user":
            return `${name} is user with access to consume content`
            break;
    
        default:
            return `${name} is a trail user`
            break;
    }
}

console.log(get_user_Roles("Ajay","admin"));

var get_role = get_user_Roles("abc", "user");

console.log(get_role);