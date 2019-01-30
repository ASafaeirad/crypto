import { genSalt, genSaltSync, hash as bHash, hashSync as bHashSync } from 'bcryptjs';
import { uid } from 'rand-token';

export async function hash(pwd: string, saltLen = 10): Promise<string> {
  const salt = await genSalt(saltLen);
  return bHash(pwd, salt);
}

export function hashSync(pwd: string, saltLen = 10): string {
  const salt = genSaltSync(saltLen);
  return bHashSync(pwd, salt);
}

export function generateUID(len = 16): string {
  return uid(len);
}

export { compare } from 'bcryptjs';

