import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { CircularAvatar } from './Avatar.styled';

export const Avatar = ({ fontSize }) => {
  const { avatarUrl, userName } = useSelector(selectUser);

  const [letter, setLetter] = useState(null);

  useEffect(() => {
    if (userName) {
      setLetter(userName.slice(0, 1));
    }
  }, [userName]);

  const [file, setFile] = useState(avatarUrl || null);

  useEffect(() => {
    setFile(avatarUrl);
  }, [avatarUrl]);

  return (
    <>
      {file ? (
        <CircularAvatar
          src={
            typeof avatarUrl === 'string'
              ? file
              : URL.createObjectURL(avatarUrl)
          }
          alt="avatarUrl"
        />
      ) : (
        <CircularAvatar style={{ fontSize }}>{letter || ''}</CircularAvatar>
      )}
    </>
  );
};
