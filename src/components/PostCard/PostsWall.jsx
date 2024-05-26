import React, { useState } from "react";
import CreatePostBox from "../CreatePost/CreatePostBox";
import PostCard from "./PostCard";
const initialPosts = [
  {
    name: "aryan thacker",
    username: "aryan.gupta",
    timestamp: "2024-05-26T04:47:45.000Z",
    likesCount: 123,
    postContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, similique maiores. Iusto soluta aut quae impedit eum accusamus, illo modi nemo error minus tenetur, maiores harum distinctio ducimus a Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente hic dolore porro quod iusto voluptatibus vero obcaecati? Magni unde sint, cupiditate sapiente voluptatem illo. In qui reprehenderit molestiae delectus. Lorem ipsum dolor sit amet",
    comments: [
      {
        name: "Shivam Jain",
        comment: "This is a great post",
        timestamp: "2024-05-26T03:47:00.000Z",
      },
      {
        name: "shreyas",
        comment: "Nice thoughts!",
        timestamp: "2024-05-26T04:00:00.000Z",
      },
    ],
  },
  {
    name: "Shivam Jain",
    username: "shivam.jain",
    timestamp: "2024-05-26T03:47:10.000Z",
    likesCount: 45,
    postContent:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    comments: [
      {
        name: "aryan thacker",
        comment: "Interesting perspective!",
        timestamp: "2024-05-26T03:00:00.000Z",
      },
      {
        name: "poonam jamgade",
        comment: "I agree with you.",
        timestamp: "2024-05-26T03:30:00.000Z",
      },
    ],
  },
  {
    name: "poonam jamgade",
    username: "poonam.jamgade",
    timestamp: "2024-05-25T22:32:30.000Z",
    likesCount: 87,
    postContent:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    comments: [
      {
        name: "Shivam Jain",
        comment: "Great thoughts!",
        timestamp: "2024-05-25T20:00:00.000Z",
      },
      {
        name: "rayan",
        comment: "I enjoyed reading this.",
        timestamp: "2024-05-25T21:00:00.000Z",
      },
    ],
  },
  {
    name: "shreyas rangastala",
    username: "shreyas.patel",
    timestamp: "2024-05-25T23:32:30.000Z",
    likesCount: 92,
    postContent:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    comments: [
      {
        name: "aryan thacker",
        comment: "Nice post!",
        timestamp: "2024-05-25T22:00:00.000Z",
      },
      {
        name: "poonam jamgade",
        comment: "Well said!",
        timestamp: "2024-05-25T23:00:00.000Z",
      },
    ],
  },
  {
    name: "rayan sheik",
    username: "rayan.sheik",
    timestamp: "2024-05-26T01:47:30.000Z",
    likesCount: 78,
    postContent:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    comments: [
      {
        name: "Shivam Jain",
        comment: "Great post!",
        timestamp: "2024-05-26T00:00:00.000Z",
      },
      {
        name: "shreyas",
        comment: "I agree with you.",
        timestamp: "2024-05-26T01:00:00.000Z",
      },
    ],
  },
];

initialPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

const PostsWall = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleNewPost = (newPost) => {
    const postWithIsLiked = { ...newPost, isLiked: false };
    setPosts((prevPosts) => [postWithIsLiked, ...prevPosts]);
  };

  const handleLikeToggle = (index) => {
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      newPosts[index] = {
        ...newPosts[index],
        isLiked: !newPosts[index].isLiked,
        likesCount: newPosts[index].isLiked
          ? newPosts[index].likesCount - 1
          : newPosts[index].likesCount + 1,
      };
      return newPosts;
    });
  };

  const handleDelete = (index) => {
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      newPosts.splice(index, 1);
      return newPosts;
    });
  };

  return (
    <>
      <CreatePostBox onNewPost={handleNewPost} />
      {posts.length === 0 ? (
        <div className="text-center text-2xl mt-10">Wow, such empty!</div>
      ) : (
        posts.map((post, index) => (
          <PostCard
            key={index}
            index={index}
            data={post}
            name={post.name}
            username={post.username}
            content={post.postContent}
            timestamp={post.timestamp}
            comments={post.comments}
            onDelete={handleDelete}
            isLiked={false}
            likesCount={false}
            handleLikeToggle={() => handleLikeToggle(index)}
          />
        ))
      )}
    </>
  );
};

export default PostsWall;
