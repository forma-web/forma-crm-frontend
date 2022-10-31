export const validRequired = {
  required: 'Это поле должно быть заполнено',
};

export const validMinLength = (value = 6) => ({
  minLength: {
    value,
    message: `Должно быть более ${value} символов`,
  },
});

export const validMaxLength = (value = 255) => ({
  maxLength: {
    value,
    message: `Должно быть меньше ${value} символов`,
  },
});

export const validEmailPattern = {
  pattern: {
    value: /^\S+@\S+\.\S+$/i,
    message: 'Неправильный формат почты',
  },
};

export const validTextField = { ...validMaxLength() };
export const validRequiredTextField = { ...validRequired, ...validTextField };
export const validEmailField = { ...validRequired, ...validMaxLength(), ...validEmailPattern };
export const validPasswordField = { ...validRequired, ...validMinLength(6), ...validMaxLength() };
