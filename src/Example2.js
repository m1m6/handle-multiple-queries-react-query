import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Example() {
  const {
    isLoading: loadingPost,
    error: errorPost,
    data: postData,
  } = useQuery(['post', 1], () =>
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.data)
  );

  const {
    isLoading: loadingPostComments,
    error: errorPostComments,
    data: commentsData,
  } = useQuery(
    ['comments', 'post', 1],
    () =>
      axios
        .get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((res) => res.data),
    {
      enabled: postData && Object.keys(postData).length > 0,
    }
  );

  if (loadingPost) return 'Loading Posts...';
  if (errorPost) return 'An error has occurred: ' + errorPost.message;

  if (loadingPostComments) return 'Loading Comments...';
  if (errorPostComments)
    return 'An error has occurred: ' + errorPostComments.message;

  return (
    <div>
      <h2>Post</h2>
      {postData && (
        <div key={postData.id} style={{ display: 'flex' }}>
          <span>{postData.id}-&nbsp;</span>
          <div>{postData.title}</div>
        </div>
      )}

      <h2>-- Comments</h2>
      {commentsData?.map((comment) => {
        return (
          <div key={comment.id} style={{ display: 'flex' }}>
            <span>{comment.id}-&nbsp;</span>
            <div>{comment.body}</div>
          </div>
        );
      })}
    </div>
  );
}
