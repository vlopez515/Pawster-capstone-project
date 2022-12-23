### Pawster

We created this project to connect users with shelters in the hopes that they will foster their preferred shelter animal. The user will log into their account using Google Authentication. After clicking on the Explore button on the home page, they will be directed to a page where they can swipe right (add animals to their likes) or swipe left (view next animal). Also on this page is a button where users can click and be redirected to a page showing their liked pets and more information on each pet.

**NOTE:** - You will have 3 `package.json` files in this project

- **back-end** - everything to do with the express/postgres backend
- **front-end** - everything to do with the create-react-app front-end

**LIVE APP** 

https://pawsterapp.netlify.app/

### View Locally 

**/back-end**

- `cd back-end`
- `npm install`
- `touch .env` 

PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=postgres
PG_USER=postgres
PG_PASSWORD=""

- `npm run db:init`
- `npm run db:seed`

**/front-end**

- `cd back-end`
- `npm install`
- `npm start`

