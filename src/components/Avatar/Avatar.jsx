import {  useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { CircularAvatar, DefaultAvatar, Letter } from './Avatar.styled';

export const Avatar = () => {
  const { avatarUrl, userName } = useSelector(selectUser);
  const letter = userName.slice(0, 1);

  const [file, setFile] = useState(avatarUrl || null);

  useEffect(() => {
    setFile(avatarUrl);
    console.log(file);
  }, [avatarUrl, file]);

  return (
    <>
      {file ? (
        <CircularAvatar
          src={
            typeof avatarUrl === 'string'
              ? avatarUrl
              : URL.createObjectURL(avatarUrl)
          }
          alt="avatarUrl"
        />
      ) : (
        <DefaultAvatar>
          <Letter>{letter}</Letter>
        </DefaultAvatar>
      )}
    </>
  );
};
