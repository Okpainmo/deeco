# Dev Notes.

Important points/issues for the developers/admins to take note of.

## Installations.

Basic installations to make.

### Starting Dependencies

```shell
npm install bcryptjs cookie-parser cors dotenv express jsonwebtoken mongoose multer zod
```

### Starting Dev Dependencies

```shell
npm install --save-dev @types/bcryptjs @types/cookie-parser @types/cors @types/express @types/jsonwebtoken @types/multer @types/node nodemon ts-node-dev typescript
```

## Regex

1. Email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

Specs: For regular email checks

2. Password: /^(?=._\d)(?=._[a-z])(?=._[A-Z])(?=._[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/

Specs:

1. At least one digit.
2. At least one lowercase letter.
3. At least one uppercase letter.
4. At least one special character from the set [!@#$%^&*()_+{}\[\]:;<>,.?~\\-].
5. The total length of the password must be at least 8 characters.

## Docker

1. For The Backend(Node) app.

```shell
docker run -d -p 5000:8080 -e DB_URI="***" -e JWT_SECRET="***" -e JWT_LIFETIME="***" --name deeco-backend-server deeco-backend-server-image
```
