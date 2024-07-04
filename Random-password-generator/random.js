const passwordlength=12;
const includelowercase=true;
const includeuppercase=true;
const includenumbers=true;
const includesymbols=true;

const password=generatepassword(passwordlength,
    includelowercase,
    includeuppercase,
    includenumbers,
    includesymbols);

function generatepassword(length,includelowercase,includeuppercase,includenumbers,includesymbols)
{
    const lowercasechars="abcdefghijklmnopqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars="0123456789";
    const symbolschars="@#$*&^%";

    let allowedchars="";
    let password="";
    
    allowedchars+=includelowercase?lowercasechars:"";
    allowedchars+=includeuppercase?uppercasechars:"";
    allowedchars+=includenumbers?numberchars:"";
    allowedchars+=includesymbols?symbolschars:"";

    if(length<=0){
        return `(password length must be at least 1)`;
    }
    
    if(allowedchars===0){
        return `(at least one set of charecter needs to be selected)`;
    }

    for(let i=0;i<length;i++)
        {
            const randomIndex=Math.floor(Math.random()*allowedchars.length);
            password+=allowedchars[randomIndex];
        }
    return password;
}

console.log(`Generated password:    ${password}`);