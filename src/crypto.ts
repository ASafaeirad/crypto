import { genSalt, hash as bHash } from 'bcryptjs';
import { uid } from 'rand-token';

export async function hash(pwd: string, saltLen = 10): Promise<string> {
  const salt = await genSalt(saltLen);
  return bHash(pwd, salt);
}

export function generateUID(len = 16): string {
  return uid(len);
}

export { compare } from 'bcryptjs';
