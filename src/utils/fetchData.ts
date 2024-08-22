export const fetchData = {
  users: async () => {
    return (await fetch('http://localhost:3000/users', {method: 'GET'})).json();
  },
  user: async (id: number) => {
    return (
      await fetch(`http://localhost:3000/users/${id}`, {method: 'GET'})
    ).json();
  },
  posts: async () => {
    return (await fetch('http://localhost:3000/posts', {method: 'GET'})).json();
  },
  post: async (id: number) => {
    return (
      await fetch(`http://localhost:3000/posts/${id}`, {method: 'GET'})
    ).json();
  },
};
