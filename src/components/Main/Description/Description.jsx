import * as S from './Description.styled';

import mobileCalendar from '../../../images/MainPageImg/mobile_calendar.png';
import mobileCalendar2x from '../../../images/MainPageImg/mobile_calendar@2x.png';
import tabletCalendar1x from '../../../images/MainPageImg/tablet_calendar.png';
import tabletCalendar2x from '../../../images/MainPageImg/tablet_calendar@2x.png';
import desktopCalendar1x from '../../../images/MainPageImg/desktop_calendar.png';
import desktopCalendar2x from '../../../images/MainPageImg/desktop_calendar@2x.png';

import mobileSidebar1x from '../../../images/MainPageImg/mobile_sidebar.png';
import mobileSidebar2x from '../../../images/MainPageImg/mobile_sidebar@2x.png';
import tabletSidebar1x from '../../../images/MainPageImg/tablet_sidebar.png';
import tabletSidebar2x from '../../../images/MainPageImg/tablet_sidebar@2x.png';
import desktopSidebar1x from '../../../images/MainPageImg/desktop_sidebar.png';
import desktopSidebar2x from '../../../images/MainPageImg/desktop_sadebar@2x.png';

import mobileTask1x from '../../../images/MainPageImg/mobile_task_all.png';
import mobileTask2x from '../../../images/MainPageImg/mobile_task_all@2x.png';
import tabletTask1x from '../../../images/MainPageImg/tablet_task_all.png';
import tabletTask2x from '../../../images/MainPageImg/tablet_task_all@2x.png';
import desktopTask1x from '../../../images/MainPageImg/desktop_tasks_all.png';
import desktopTask2x from '../../../images/MainPageImg/desktop_task_all@2x.png';

const DescriptionSection = () => {
  return (
    <>
      <S.DescriptionContainer>
        <S.DescriptionContent>
          <S.DescriptionBlock>
            <S.DescriptionInfo>
              <S.DescriptionNumber>1.</S.DescriptionNumber>
              <S.DescriptionNameAccent>calendar</S.DescriptionNameAccent>
              <S.DescriptionName>view</S.DescriptionName>
              <S.DescriptionText>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </S.DescriptionText>
            </S.DescriptionInfo>

            <S.DescritpionPicture>
              <source
                srcSet={`${desktopCalendar1x} 1x, ${desktopCalendar2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${tabletCalendar1x} 1x, ${tabletCalendar2x} 2x`}
                media="(min-width: 768px)"
              />

              <source srcSet={`${mobileCalendar} 1x, ${mobileCalendar2x} 2x`} />
              <S.DescriptionImg
                src={mobileCalendar}
                alt="Table calendars of three different types"
              />
            </S.DescritpionPicture>
          </S.DescriptionBlock>

          <S.DescriptionBlock>
            <S.DescriptionInfo>
              <S.DescriptionNumber>2.</S.DescriptionNumber>
              <S.DescriptionName>sidebar</S.DescriptionName>
              <S.DescriptionText>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </S.DescriptionText>
            </S.DescriptionInfo>
            <S.DescritpionPicture>
              <source
                srcSet={`${desktopSidebar1x} 1x, ${desktopSidebar2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${tabletSidebar1x} 1x, ${tabletSidebar2x} 2x`}
                media="(min-width: 768px)"
              />

              <source srcSet={`${mobileSidebar1x} 1x, ${mobileSidebar2x} 2x`} />
              <S.DescriptionImg
                src={mobileSidebar1x}
                alt="User panel with dark and light themes"
              />
            </S.DescritpionPicture>
          </S.DescriptionBlock>

          <S.DescriptionBlock>
            <S.DescriptionInfo>
              <S.DescriptionNumber>3.</S.DescriptionNumber>
              <S.DescriptionNameAccent>all in</S.DescriptionNameAccent>
              <S.DescriptionName>one</S.DescriptionName>
              <S.DescriptionText>
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </S.DescriptionText>
            </S.DescriptionInfo>
            <S.DescritpionPicture>
              <source
                srcSet={`${desktopTask1x} 1x, ${desktopTask2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${tabletTask1x} 1x, ${tabletTask2x} 2x`}
                media="(min-width: 768px)"
              />

              <source srcSet={`${mobileTask1x} 1x, ${mobileTask2x} 2x`} />
              <S.DescriptionImg
                src={mobileTask1x}
                alt="Part of the screen with the calendar and scheduled tasks"
              />
            </S.DescritpionPicture>
          </S.DescriptionBlock>
        </S.DescriptionContent>
      </S.DescriptionContainer>
    </>
  );
};

export default DescriptionSection;
