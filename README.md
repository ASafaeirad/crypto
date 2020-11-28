# crypto

Useful encryption and jwt utils

## Bcrypt

```typescript
import { hash, hashSync, compare } from '@frontendmonster/crypto';

const passwordHash = await hash(password, saltLen); // hash password with specific salt and returns Promise<string>
const passwordHashSync = await hashSync(password, saltLen); // hash password with specific salt and returns hash
const isValid = await compare(userPassword, hasedPassword); // compare hashed passwords
```

## Id

```typescript
import { randomId, randomHex, randomNumber } from '@frontendmonster/crypto';

const id = randomId(16); // create 16-len uid
const hex = randomHex(16); // create 16-len uid
const HEX = randomHex(16, { casing: 'uppercase' }); // create 16-len uppercase hex string
const numbers = randomNumber(16); // create 16-len number string
```

## JWT

```typescript
import { decode, sign, verify } from '@frontendmonster/crypto';
const jwt = sign(payload, secret, option); // sign json web token
const isValid = verify(jwt, tokn); // verify json web token
const payload = decode(jwt); // decode json web token
```
