export const a = 42;
export const b = 22;
export const result = a - b;

export const string = "Essaye de concaténer plusieurs chaînes !";

export const c = string.slice(0, string.length / 3);
export const d = string.slice(string.length / 3, (string.length / 3) * 2);
export const e = string.slice((string.length / 3) * 2, string.length);
export const concatenation = c + d + e;
