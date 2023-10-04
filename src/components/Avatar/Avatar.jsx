import { useDropzone } from 'react-dropzone';
import { ReactComponent as UpdateAvatarIcon } from '../../icons/plus.svg';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';

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

  return (
    <div>
      <div
        // {...getRootProps()}
        style={{
          width: '72px',
          height: '72px',
          border: '2px solid #3e85f3',
          borderRadius: '50%',
        }}
      >
        <img
          style={{
            width: '100%',
            height: ' 100%',
            objectFit: 'cover',
            // border: '2px solid #3e85f3',
            borderRadius: '50%',
          }}
          alt="avatar"
        />
        <div>
          <input
            id="avatarUrl"
            name="avatarUrl"
            {...getInputProps({ id: 'avatarUrl', name: 'avatarUrl' })}
            style={{ display: 'none' }}
          />
          <label htmlFor="avatarUrl">
            <UpdateAvatarIcon
              style={{ fill: '#3e85f3', width: '14px', height: '14px' }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
