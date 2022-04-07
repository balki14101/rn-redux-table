// library imports
import axios from 'axios';

/**
 * @function fetchUser
 * @returns {JSON}
 */
const fetchUser = async () => {
  const fetchUserUrl = 'https://jsonplaceholder.typicode.com/users';
  try {
    const fetchUserResponse = await axios.get(fetchUserUrl);
    return fetchUserResponse.data;
  } catch (e) {
    return e;
  }
};

// exports
export {fetchUser};
