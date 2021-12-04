export const validateUsername = (username: string) => {
   let error: string = ''
   if (!username) {
      error = 'Username is required!'
   } else if (username.length < 1) {
      error = 'Please enter valid username!'
   }
   return error
}

export const validateEmail = (email: string) => {
   let error: string = ''
   if (!email) {
      error = 'Email is required!'
   } else if (email.length < 1 || !email.includes('@')) {
      error = 'Please enter valid email!'
   }
   return error
}

export const validatePhone = (phone: string) => {
   let error: string = ''
   if (!phone) {
      error = 'Phone number is required!'
   } else if (phone.match(/\d/g) === null || phone.length !== 9) {
      error = 'Please enter valid phone number!'
   }
   return error
}
