# crypto

useful encryption and jwt utils

## Usage

```javascript
import { hash, compare, uid, decode, sign, verify } from '@frontendmonster/crypto';

const hashedPassword = await hash(password, salt); // hash password with specific salt
const await compare(userPassword, hasedPassword); // compare hashed passwords
const token = uid(16); // crate 16-len uid
const jwt = sign(payload, secret, option); // sign json web token
const isValid = verify(jwt, tokn); // verify json web token
const payload = decode(jwt); // decode json web token
```
