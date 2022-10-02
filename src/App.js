import React, { useState } from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
import axios from 'axios';

export default function Example() {
  const [postsQuery, usersQuery] = useQueries({
    queries: [
      {
        queryKey: ['posts', 1],
        queryFn: () =>
          axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.data),
      },

      {
        queryKey: ['users', 2],
        queryFn: () =>
          axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.data),
      },
    ],
  });

  if (postsQuery.isLoading || usersQuery.isLoading) return 'Loading...';

  if (postsQuery.error)
    return 'An error has occurred: ' + postsQuery.error.message;

  if (usersQuery.error)
    return 'An error has occurred: ' + usersQuery.error.message;

  return (
    <div>
      <h2>Posts</h2>
      {postsQuery.data?.slice(10).map((post) => {
        return (
          <div style={{ display: 'flex' }}>
            <span>{post.id}-&nbsp;</span>
            <div>{post.title}</div>
          </div>
        );
      })}

      <h2>Users</h2>
      {usersQuery.data?.map((user) => {
        return (
          <div style={{ display: 'flex' }}>
            <span>{user.id}-&nbsp;</span>
            <div>{user.name}</div>
          </div>
        );
      })}
    </div>
  );
}
