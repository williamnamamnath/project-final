# API Documentation



## Endpoint Details



### 1. Favorites Endpoints



#### `"/api/getFavorites"`

- **Method:** `GET`

- **Description:** Returns an array of users’ favorite recipes.

- **Keys:** `recipe`, `name`



Successful status codes: 200.

Unsuccessful status codes: 404, 500.





#### `"/api/addFavorites"`

- **Method:** `POST`

- **Description:** Adds the favourited items to the database.

- **Keys:** `recipe`, `name`



Successful status codes: 200, 201.

Unsuccessful status codes: 404, 500.





#### `"/api/deleteFavorite/:id"`

- **Method:** `DELETE`

- **Description:** Deletes a specific favourited item from the database.



Successful status codes: 200.

Unsuccessful status codes: 404, 500.





#### `"/api/updateDescription/"`

- **Method:** `PUT`

- **Description:** Updates the description of the list of recipes that were favorited to add more context/details.



Successful status codes: 200.

Unsuccessful status codes: 404, 500.





### 2. User Endpoints



#### `"/signup"`

- **Method:** `POST`

- **Description:** Adds a new user to the database.

- **Keys:** `fname`, `lname`, `phone`, `email`, `password`, `confirmPassword`



Successful status codes: 200, 201.

Unsuccessful status codes: 404, 400, 500.



#### `"/login"`

- **Method:** `POST`

- **Description:** Logs in an existing user.

- **Keys:** `email`, `password`



Successful status codes: 200, 201.

Unsuccessful status codes: 404, 401 500.