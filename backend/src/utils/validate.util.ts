export const RGX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
export const RGX_PASSWORD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
export const RGX_PHONE = /^(\d{11}|\d{10})$/

export const isEmail = (email: string) => {
  if (!RGX_EMAIL.test(email)) return false
  return true
}

export const isPassword = (password: string) => {
  if (!RGX_PASSWORD.test(password)) return false
  return true
}

export const isPhoneNumber = (phoneNumber: string) => {
  if (!RGX_PHONE.test(phoneNumber)) return false
  return true
}

export const isBirthDate = (date: string) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateRegex.test(date)) {
    return false;
  }

  const dateParts = date.split('-');
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[2], 10);

  const dateOfBirth = new Date(year, month, day);

  return (
    dateOfBirth.getDate() === day &&
    dateOfBirth.getMonth() === month &&
    dateOfBirth.getFullYear() === year
  );
}
