export interface Theme {
  mainBg: string;
  mainText: string;
  neutralText: string;
  border: string;
}

export const light: Theme = {
  mainBg: '#fff',
  mainText: '#000',
  neutralText: '#777',
  border: '#E0E0E0',
};

export const dark: Theme = {
  mainBg: '#000',
  mainText: '#fff',
  neutralText: '#888',
  border: '#2E2E2E',
};
