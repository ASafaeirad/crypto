# password

hash and compare passwords

## Usage

```javascript
import { hash, compare } from '@frontendmonster/password';

const hashedPassword = hash(password, salt); // hash password with specific salt
const compare(userPassword, hasedPassword); // compare hashed passwords
```
