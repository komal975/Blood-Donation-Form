//regex for username 
let username = prompt("Enter your username","komal_bhise");
function usernameChecker(username)
{
  RegExp = /^[A-Za-z0-9_]+$/i;
  if (RegExp.test(username))
  {
    return true;
  }
  else
  {
    return false;
  }
}
let usernamevalue = usernameChecker(username);
console.log(usernamevalue);
console.log(usernameChecker('Kumar_adagale97')); //true

//regex for email 
let email = prompt("Enter your email address","komalbhise49@gmail.com");
function emailChecker(email)
{
  RegExp = /^[A-Za-z0-9_@$&.#]+$/i;
  if (RegExp.test(email))
  {
    return true;
  }
  else
  {
    return false;
  }
}
let emailvalue = emailChecker(email);
console.log(emailvalue);
console.log(emailChecker('Kumar_adagale97@gmail.com')); //true

//regex for blood group selection
let bloodgroup = prompt("Enter your blood group","B+");
function bloodgroupChecker(bloodgroup)
{
  RegExp = /^[A-BO+-S]+$/i;
  if (RegExp.test(bloodgroup))
  {
    return true;
  }
  else
  {
    return false;
  }
}
let bloodgroupvalue = bloodgroupChecker(bloodgroup);
console.log(bloodgroupvalue);
console.log(bloodgroupChecker('O-')); //true

//regex for address 
let address = prompt("Enter your address","A/P Gojubavi(Undawadi K.P),Tal.Baramati,Dist.Pune,Baramati-413102");
function addressChecker(address)
{
  RegExp = /^[A-Za-z0-9/,.()]+$/i;
  if (RegExp.test(address))
  {
    return true;
  }
  else
  {
    return false;
  }
}
let addressvalue = addressChecker(address);
console.log(addressvalue);
console.log(addressChecker('Thoptevadi,Sawanwasti,Late Road,Korhale(BK),Baramati,Korhale(BK)-412103')); //false

//regex for phone number 
let phoneNumber = prompt("Enter your phone number","9530564534");
function phoneChecker(phoneNumber)
{
  RegExp = /^[0-9]+$/i;
  if (RegExp.test(phoneNumber))
  {
    return true;
  }
  else
  {
    return false;
  }
}
let phoneNumbervalue = phoneChecker(phoneNumber);
console.log(phoneNumbervalue);
console.log(phoneChecker('8657463092')); //true

//regex for other details 
let otherDetails = prompt("Enter your other details","khdhi458 *%$FKkj lkrjt*^#$");
function DetailsChecker(otherDetails)
{
  RegExp = /^[A-Za-z0-9@$&#]+$/i;
  if (RegExp.test(otherDetails))
  {
    return true;
  }
  else
  {
    return false;
  }
}
let otherDetailsvalue = DetailsChecker(otherDetails);
console.log(otherDetailsvalue);
console.log(DetailsChecker('hdhks 8372uieiu 6487ewkjd &$%FJJT*T')); //false
