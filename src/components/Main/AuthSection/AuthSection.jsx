import * as S from './AuthSectin.styled.jsx';

import desktopGooseMainPage from '../../../images/MainPageImg/desktop_GooseMainPage.png';
import desktopGooseMainPage2x from '../../../images/MainPageImg/desktop_GooseMainPage@2x.png';
import { ReactComponent as LogInIcon } from './../../../images/icons/logInIcon.svg';

const AuthSection = () => {
  return (
    <>
      <S.MainSectionContainer>
        <S.MainSectionContent>
          <S.MainSectionGoose>
            <S.MainSectionImageImg
              src={desktopGooseMainPage}
              srcSet={`${desktopGooseMainPage} 1x, ${desktopGooseMainPage2x} 2x`}
            ></S.MainSectionImageImg>
          </S.MainSectionGoose>
          <S.MainSectionTitle>
            G<S.MainSectionTitleItalic>oo</S.MainSectionTitleItalic>seTrack
          </S.MainSectionTitle>
          <S.AuthLinkBlock>
            <S.AuthLinkLogIn to="/login">
              Log in <LogInIcon />
            </S.AuthLinkLogIn>
            <S.AuthLink to="/register">Sign up</S.AuthLink>
          </S.AuthLinkBlock>
        </S.MainSectionContent>
      </S.MainSectionContainer>
    </>
  );
};

export default AuthSection;
