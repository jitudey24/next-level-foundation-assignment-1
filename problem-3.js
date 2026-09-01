function validateUsername(userName){
    if(userName.length < 4){
        return "Too Short"
    } else if(userName.includes(" ")){
        return "No Space Allowed"
    } else if(userName.toLowerCase().includes("admin")){
        return "Reserved Word"
    }
    return "Available"
}
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("Admin_Rahim"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("abcd"));
