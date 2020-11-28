import * as NanoId from 'nanoid';

type Casing = 'uppercase' | 'lowecase';

export function randomId(len = 16): string {
  return NanoId.nanoid(len);
}

export function randomHex(
  len = 16,
  { casing }: { casing: Casing } = { casing: 'lowecase' },
) {
  if (casing === 'uppercase')
    return NanoId.customAlphabet('1234567890ABCDEF', len);
  if (casing === 'lowecase')
    return NanoId.customAlphabet('1234567890abcdef', len);

  throw Error('Wrong Argument');
}

export function randomNumber(len = 16) {
  return NanoId.customAlphabet('1234567890', len);
}
