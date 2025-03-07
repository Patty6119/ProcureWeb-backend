Get start with ProcureWeb Backend

As you've clone this project, don't forget to run this command in this project

npm start

![Screenshot 2025-03-07 160219](https://github.com/user-attachments/assets/a70c42f5-c91d-46d8-8a08-179dcd623b4a)

Make sure your database is running 

First of all, you have to make sure to check this config file

You should to config it to match to your Database

![Screenshot 2025-03-07 160528](https://github.com/user-attachments/assets/56d2d748-33c2-4594-b2e6-621e2d22f558)

First, server.js, it's endpoint of this project. And it's the main part to start the server by this command.

node server.js or npm start

![Screenshot 2025-03-07 160947](https://github.com/user-attachments/assets/cbdf2120-f13e-4a7b-ba42-370d7e13362f)

This project has 4 main part to run, in app folder
-config
-controllers
-models
-routes

![Screenshot 2025-03-07 161133](https://github.com/user-attachments/assets/0fce8dc3-be1e-41e5-a518-f75d38dcd824)

config

This file contains every config you need to run this project. For now, it contains Database configuration

![Screenshot 2025-03-07 161314](https://github.com/user-attachments/assets/92007296-02d2-460d-9242-62dffef3eda5)

controllers

This file contains every action of APIs to do CRUD. Create Read Update Delete

This function have for Read

![Screenshot 2025-03-07 161522](https://github.com/user-attachments/assets/b24364a3-86c5-401e-934d-8a18de2ab7a4)

This function have for Create

![Screenshot 2025-03-07 161648](https://github.com/user-attachments/assets/d16cdb6c-975d-4092-a248-d6b58dad2027)

This function have for Read, but specific with id

![Screenshot 2025-03-07 161812](https://github.com/user-attachments/assets/75f23c43-6cb0-4b1a-9e95-fa7901f66569)

This funtion have for Update by id

![Screenshot 2025-03-07 162043](https://github.com/user-attachments/assets/47fcdbbe-33e9-4b90-92ce-494146050223)

This function have for Delete by id

![Screenshot 2025-03-07 163343](https://github.com/user-attachments/assets/49417d9f-e8a2-4199-b632-7faeac09440e)

models

This file contains model of the table we'll create and plug to database

index.js

it contains sequelize and use config to plug with database. And then export to use in other file

![Screenshot 2025-03-07 163448](https://github.com/user-attachments/assets/a833432d-2104-4f25-8bf1-937c9c575811)

user.model.js

it contains model to create table in database and match to table.

![Screenshot 2025-03-07 163645](https://github.com/user-attachments/assets/92a4d16a-948b-4516-a523-3fdcabea1f5b)

![Screenshot 2025-03-07 163656](https://github.com/user-attachments/assets/c7c48186-2ef8-4419-922a-3efa5e4691ae)

routes

This file contains routes of APIs to lead every requests to controllers.

user.routes

it contains every routes to go to controllers.

![Screenshot 2025-03-07 163814](https://github.com/user-attachments/assets/8b90aacc-ce51-42a9-b110-61ef30c60381)

server.js

This file is an endpoint for every requests to go to other routes.

It has allowed cors for Frontend project to pass through.

Use sequelize from model to connect to database.

And the last, it will listen to any request that come in on port 5000 which contained by .env config file

![Screenshot 2025-03-07 164022](https://github.com/user-attachments/assets/00f6d180-59e1-433e-9f14-f7fadab20db2)













