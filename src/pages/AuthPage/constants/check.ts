export const validRequired = {
  required: 'Это поле должно быть заполнено',
};

export const validMinLength = {
  minLength: {
    value: 6,
    message: 'Должно быть более 6 символов',
  },
};

export const validMaxLength = {
  maxLength: {
    value: 255,
    message: 'Должно быть менее 255 символов',
  },
};

export const validEmailPattern = {
  pattern: {
    value: /^\S+@\S+\.\S+$/i,
    message: 'Неправильный формат почты',
  },
};

export const validEmailField = { ...validRequired, ...validMaxLength, ...validEmailPattern };
export const validPasswordField = { ...validRequired, ...validMinLength, ...validMaxLength };
