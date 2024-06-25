function generateotp(length){
    let otp="";
    for (let i=0; i < length; i++) {
        otp += math.floor(math.random()*10).tostring() ;
      }
      return otp;
}
console.log(generateotp(4));