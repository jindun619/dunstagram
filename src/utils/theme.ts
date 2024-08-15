export interface Theme {
  mainBg: string;
  mainText: string;
  neutralText: string;
}

export const light: Theme = {
  mainBg: '#fff',
  mainText: '#000',
  neutralText: '#777',
};

export const dark: Theme = {
  mainBg: '#000',
  mainText: '#fff',
  neutralText: '#888',
};
