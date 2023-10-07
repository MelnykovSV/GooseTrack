import { Menu } from '@mui/material';
import * as S from './TaskToolbar.styled';
import { useResizeScreen } from 'hooks';

const statusLabels = {
  todo: 'To do',
  inProgress: 'In progress',
  done: 'Done',
};

export const TaskToolbar = ({
  anchorEl,
  isOpen,
  onClose,
  statuses,
  onChangeStatus,
}) => {
  const { isMobile } = useResizeScreen();

  const menuStyle = (() => {
    if (isMobile) {
      return { padding: '14px', minWidth: '115px' };
    } else {
      return { padding: '20px 24px', minWidth: '147px' };
    }
  })();

  return (
    <Menu
      id="more-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'more-button',
      }}
      sx={{
        '.MuiPaper-root': {
          ...menuStyle,
          boxShadow: ' 0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
          borderRadius: '8px',
        },
        '& .MuiList-root': { padding: 0 },
      }}
    >
      {statuses.map(status => (
        <S.StatusButton key={status} onClick={() => onChangeStatus(status)}>
          <S.Status>{statusLabels[status]}</S.Status>
          <S.ArrowIcon />
        </S.StatusButton>
      ))}
    </Menu>
  );
};
