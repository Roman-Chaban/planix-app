export const splitFullName = (fullName: string) => {
  const [firstName, ...rest] = (fullName ?? '').trim().split(' ');
  const lastName = rest.join(' ');

  return { firstName, lastName };
};

export const getInitials = (firstName: string, lastName: string) => {
  const first = firstName.charAt(0).toUpperCase();
  const last = lastName.charAt(0).toUpperCase();
  return `${first}${last}`;
};
