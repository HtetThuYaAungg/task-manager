const commonColor = {
  success: '#16a34a',
  warnning: '#8000C8',
  danger: '#F5222D',
};

const light = {
  text: '#000',
  textGray: '#575757',
  background: '#fff',
  popUpBackground : '#e4e6eb',
  active: '#3162ff',
  ...commonColor
};

const dark = {
  text: '#fff',
  textGray: '#999999',
  background: '#121212',
  popUpBackground : '#1f1f1f',
  active: '#3162ff',
  ...commonColor
};

const Colors = { light, dark };

export default Colors;
