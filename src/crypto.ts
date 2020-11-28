import * as bcrypt from 'bcryptjs';

export async function hash(pwd: string, saltLen = 10): Promise<string> {
  const salt = await bcrypt.genSalt(saltLen);
  return bcrypt.hash(pwd, salt);
}

export function hashSync(pwd: string, saltLen = 10): string {
  const salt = bcrypt.genSaltSync(saltLen);
  return bcrypt.hashSync(pwd, salt);
}

export const compare = bcrypt.compare;
