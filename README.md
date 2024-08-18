# My Elysia API

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run api_project_index
```

This project was created using `bun init` in bun v1.1.21. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


This readme content :
1. Cara run package elysia
2. Setup database di MySql
3. CURL

### === Cara run package elysia ===
- extract rar & masuk ke directory
  cd my-elysia-api
  bun init -y
- install bun di windows
  powershell -c "irm bun.sh/install.ps1 | iex"
- add elysia di bun.js
  bun add elysia
- add dependency (kalo di java kya dependency)
* library bcrypt
  bun add bcrypt
  bun add -d @types/bcrypt
* library mysql
  bun add mysql2
- run server
  bun run index.ts

Project Structure :
```
my-elysia-api/
├── index.ts
├── db.ts
└── services/
    └── financeService.ts
    └── userService.ts
```

### === Setup database di MySql ===

```
username : root
password : root
```

### === CURL ===

### Register a new user:
```
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"username": "user1", "password": "pass123"}'
```

### Login with the user
```
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "user1", "password": "pass123"}'
```

### Add income:
```
curl -X POST http://localhost:3000/income -H "Content-Type: application/json" -d '{"userId": 1, "amount": 500}'
```

### Add expense:
```
curl -X POST http://localhost:3000/expense -H "Content-Type: application/json" -d '{"userId": 1, "amount": 200}'
```

### Get balance:
```
curl http://localhost:3000/balance/1
```

### Get transactions:
```
curl http://localhost:3000/transactions/1
```