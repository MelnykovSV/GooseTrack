import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';

const backdrop = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1200',
};

export function CustomModal({ open, onClose, children, ...props }) {
  return (
    <Modal open={open} onClose={onClose} {...props}>
      <Box sx={backdrop}>{children}</Box>
    </Modal>
  );
}
