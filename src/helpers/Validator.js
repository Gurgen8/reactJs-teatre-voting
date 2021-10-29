class Validator {
    static nameCheck(name) {
      return /^[A-z ]{2,}$/.test(name);
    }
  
   static phoneCheck(phone) {
      return /^((\+374)|(\+00)|(0))((93)|(77)|(91)|(98)|(55)|(94))[0-9]{6}$/.test(phone);
    }
  }
  
  export default Validator
  