import { Container } from './ReviewCardAvatar.styled';

export const ReviewCardAvatar = ({ avatarUrl, userName }) => {
  return (
    <Container>
      {avatarUrl ? <img src={avatarUrl} alt={`${userName}'s avatar`} /> : null}
      <div className="avatar-placeholder">
        <span>{userName ? userName.split('')[0] : null}</span>
      </div>
    </Container>
  );
};
