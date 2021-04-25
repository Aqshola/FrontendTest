export const getPersonList = async () => {
  const result = await fetch('https://randomuser.me/api/?results=20');

  const parseResult = await result.json();

  return parseResult.results;
};
