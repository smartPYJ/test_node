const os = require ('os')

//information about current user 

const user = os.userInfo()
console.log(user );

//return the system up time 

console.log(`${os.uptime}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()

}
 console.log(currentOs);