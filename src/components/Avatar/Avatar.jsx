import { useDropzone } from 'react-dropzone';
import { ReactComponent as UpdateAvatarIcon } from '../../icons/plus.svg';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { CircularAvatar, DefaultAvatar, Letter } from './Avatar.styled';

export const Avatar = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('avatar', file);

    dispatch(updateAvatar(formData));
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  console.log(acceptedFiles);
  console.log(getRootProps);
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
    console.log(file);
  }, [avatarUrl, file]);

  // console.log(acceptedFiles)
  // console.log(getRootProps)

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
          <Letter>{letter || ''}</Letter>
        </DefaultAvatar>
      )}
    </>
  );
};
