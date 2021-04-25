export const getPersonList = async (page = 1) => {
  const result = await fetch('https://randomuser.me/api/?results=20');

  const parseResult = await result.json();

  return parseResult.results;
};
