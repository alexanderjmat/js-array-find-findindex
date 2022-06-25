/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  const findUser = usersArray.find(function(user) {
    if (user.username === username) {
      return username;
    };
    return undefined;
  })
  return findUser;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const findIndex = usersArray.findIndex(function(user) {
    if (user.username === username) {
      return user;
    }
    return undefined;
  })
  if (findIndex < 0) {
    return undefined;
  }
  const userR = usersArray[findIndex]
  usersArray.splice(findIndex, 1);
  return userR;
}

const r = removeUser([
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
], 'akagen')