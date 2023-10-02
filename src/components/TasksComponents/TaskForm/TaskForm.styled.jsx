import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const InputContaiter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputTimeContaiter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 11px;

  @media screen and (min-width: 375px) {
    gap: 15px;
  }
`;

export const Label = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: var(--textPrimaryLight);
`;

export const Input = styled.input`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 14px;
  outline: none;
  border: 1px solid var #f7f7f7;
  /* (--border-label-color); */
  border-radius: 8px;
  background-color: #f7f7f7;
  /* var (--task-input-bg-color); */
  color: var(--textPrimaryLight);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* var(--animation); */

  &:hover,
  &:focus {
    border: 1px solid var(--accentPrimary);
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(0);
    /* var(--icon-color-time-input); */
  }
`;

export const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 2px;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: var(--textPrimaryLight);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const RadioInput = styled.input`
  margin-right: 6px;
  appearance: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  outline: 1px solid
    ${props => {
      if (props.checked) {
        switch (props.value) {
          case 'low':
            return 'rgba(114, 194, 248, 0.3)';
          // 'var(--task-priority-low-checked-color)';
          case 'medium':
            return ' rgba(243, 178, 73, 0.3)';
          // 'var(--task-priority-medium-checked-color)';
          case 'high':
            return 'rgba(234, 61, 101, 0.3)';
          // 'var(--task-priority-high-checked-color)';
          default:
            return '';
        }
      }

      switch (props.value) {
        case 'low':
          return '#72c2f8';
        // var(--task - priority - low - color)';
        case 'medium':
          return '#f3b249';
        // var(--task - priority - medium - color)';
        case 'high':
          return '#ea3d65';
        // 'var(--task-priority-high-color)';
        default:
          return '';
      }
    }};

  border: 1px solid
    ${props => {
      if (props.checked) {
        return 'var(--bgPrimary)';
      }

      switch (props.value) {
        case 'low':
          return '#72c2f8';
        // 'var(--task-priority-low-color)';
        case 'medium':
          return '#f3b249';
        // 'var(--task-priority-medium-color)';
        case 'high':
          return '#ea3d65';
        // 'var(--task-priority-high-color)';
        default:
          return '';
      }
    }};

  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#72c2f8';
      // 'var(--task-priority-low-color)';
      case 'medium':
        return '#f3b249';
      // 'var(--task-priority-medium-color)';
      case 'high':
        return '#ea3d65';
      // 'var(--task-priority-high-color)';
      default:
        return '';
    }
  }};

  @media screen and (min-width: 375px) {
    width: 10px;
    height: 10px;
    border: 2px solid
      ${props => {
        if (props.checked) {
          return 'var(--bgPrimary)';
        }

        switch (props.value) {
          case 'low':
            return '#72c2f8';
          // 'var(--task-priority-low-color)';
          case 'medium':
            return '#f3b249';
          // 'var(--task-priority-medium-color)';
          case 'high':
            return '#ea3d65';
          // 'var(--task-priority-high-color)';
          default:
            return '';
        }
      }};

    outline: 2px solid
      ${props => {
        if (props.checked) {
          switch (props.value) {
            case 'low':
              return 'rgba(114, 194, 248, 0.3)';
            // 'var(--task-priority-low-checked-color)';
            case 'medium':
              return ' rgba(243, 178, 73, 0.3)';
            // 'var(--task-priority-medium-checked-color)';
            case 'high':
              return 'rgba(234, 61, 101, 0.3)';
            // 'var(--task-priority-high-checked-color)';
            default:
              return '';
          }
        }

        switch (props.value) {
          case 'low':
            return '#72c2f8';
          // 'var(--task-priority-low-color)';
          case 'medium':
            return '#f3b249';
          // 'var(--task-priority-medium-color)';
          case 'high':
            return '#ea3d65';
          // 'var(--task-priority-high-color)';
          default:
            return '';
        }
      }};
  }

  &:hover,
  &:focus {
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      /* var(--animation), */ outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
    /* var(--animation); */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 18px;
  width: 100%;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--bgPrimary);
  outline: none;
  border: none;
  padding: 12px 21px;
  background-color: var(--accentPrimary);
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* var(--animation); */

  &:hover,
  &:focus {
    background-color: var(--accentPrimaryHover);
  }

  @media screen and (min-width: 768px) {
    padding: 15px 51px;
  }
`;

export const AddIcon = styled.svg`
  stroke: var(--bgPrimary);
  width: 12px;
  height: 12px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--textPrimaryLight);
  outline: none;
  border: none;
  padding: 12px 18px;
  background-color: e5edfa;
  /* var(--cancel-button-background-color); */
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* var(--animation); */

  &:hover,
  &:focus {
    background-color: #f7f7f7;
    /* var(--border-label-color); */
  }

  @media screen and (min-width: 768px) {
    padding: 14px 48px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--bgPrimary);
  outline: none;
  border: none;
  padding: 12px 40px;
  background-color: #3e85f3;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* var(--animation); */

  &:hover,
  &:focus {
    background-color: var(--accentPrimaryHover);
  }

  @media screen and (min-width: 768px) {
    padding: 15px 40px;
  }
`;

export const EditIcon = styled.svg`
  stroke: var(--bgPrimary);
  fill: transparent;
  width: 16px;
  height: 16px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
