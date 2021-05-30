import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import SearchBar from '../../../common/SearchBar';
import { postsSelector } from '../../../redux/industry/postSlice';
import Page from '../Page';
import PostList from './PostList';
import './index.css';

const ViewAllIndustry = () => {
  const displayedPosts = useSelector(postsSelector);
  const [postList, setPostList] = useState(displayedPosts);
  const [input, setInput] = useState('');

  useEffect(() => {setPostList(displayedPosts)}, [displayedPosts]);

  const updateInput = async (input) => {
    setInput(input);
    if (input.trim() !== '') {
      const filtered = displayedPosts.filter(post => {
        return post.companyName.toLowerCase().includes(input.toLowerCase()) ||
          post.postTitle.toLowerCase().includes(input.toLowerCase()) ||
          post.postSubTitle.toLowerCase().includes(input.toLowerCase())
      })
      setPostList(filtered);
    } else {
      setPostList(displayedPosts)
    }
 }

  return (
    <Page title="Industry">
      <section>
        <h3>Industry</h3>
        <SearchBar 
          input={input}
          onChange={updateInput}
        />
        <ul className="list-unstyled">
          <PostList postList={postList} />
        </ul>
      </section>
    </Page>
  )
}

export default ViewAllIndustry;
