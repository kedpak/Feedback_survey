// Iterates through all recipients user has inputted, and splits at comma.

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (recipients) => {
  const invalidEmails = recipients.split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

    if (invalidEmails.length) {
      return `These emails are invalid: ${invalidEmails}`;
    }
    return;
};
