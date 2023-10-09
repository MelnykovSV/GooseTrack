import { PhoneInput } from "./CustomFormInput.styled";


export const CustomFormInput = ({ field, fieldState }) => {
  return (
    <PhoneInput
      format="+38 (###) ###-##-##"
      allowEmptyFormatting
      mask="_"
      {...field}
      ref={null}
      status={
        fieldState.error && fieldState.isDirty
          ? 'error'
          : fieldState.isDirty
          ? 'valid'
          : 'default'
      }
    />
  );
};
