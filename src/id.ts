import * as NanoId from 'nanoid';

type Casing = 'uppercase' | 'lowecase';

export function randomId(len = 16): string {
  return NanoId.nanoid(len);
}

export function randomHex(
  len = 16,
  { casing }: { casing: Casing } = { casing: 'lowecase' },
): string {
  const generator =
    casing === 'uppercase'
      ? NanoId.customAlphabet('1234567890ABCDEF', len)
      : NanoId.customAlphabet('1234567890abcdef', len);

  return generator();
}

export function randomNumber(len = 16): string {
  const generator = NanoId.customAlphabet('1234567890', len);
  return generator();
}
