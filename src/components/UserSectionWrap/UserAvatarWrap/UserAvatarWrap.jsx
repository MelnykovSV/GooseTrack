import { Avatar } from 'components/Avatar/Avatar';
import {
  AvatarContainer,
  AvatarUploadBtn,
  AvatarUploadContainer,
  UpdateIcon,
  UserAvatar,
  UserName,
  UserRole,
} from './UserAvatarWrap.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { updateAvatar } from 'redux/auth/operations';
import { selectUser } from 'redux/selectors';

export const UserAvatarWrap = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector(selectUser);

  return (
    <AvatarContainer>
      <UserAvatar>
        <Avatar isForm />
        <AvatarUploadContainer>
          <input
            id="avatarUrl"
            name="avatarUrl"
            type="file"
            accept="image/*,.png,.jpg,.gif"
            onChange={e => {
              const file = e.target.files[0];

              if (file) {
                const maxSizeInBytes = 600 * 1024;
                if (file.size > maxSizeInBytes) {
                  Notify.failure(
                    'The uploaded file is too large. The maximum size is 600 KB.'
                  );
                  e.target.value = null;
                  return;
                }
              }

              const formData = new FormData();
              formData.append('avatar', file);
              dispatch(updateAvatar(formData));
            }}
            style={{ display: 'none' }}
          />

          <AvatarUploadBtn htmlFor="avatarUrl">
            <UpdateIcon />
          </AvatarUploadBtn>
        </AvatarUploadContainer>
      </UserAvatar>

      <UserName>{userName}</UserName>
      <UserRole>User</UserRole>
    </AvatarContainer>
  );
};
