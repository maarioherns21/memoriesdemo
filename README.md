### WIREFRAMING
![alt text](./client/movieflick/public/memories.png)


### TECHNOLOGIES
This is a full Mern app  with full CRUD
MongoDB, Express, React, Node, GoogleAuth, JTW,

### RELATIONSHIPS
A user has many post(userPost)/ a post belongs to a User.
A user has many likes/  A like belongs to a User.
A user can delete his own  post / a post can be deleted by his owner
A user can search tags / a user has many tags 
A user can search post / a post can be search by many user 


#### ADDING POST

Note that in this app, a user can "add" a post by creating it in mongoDB database. these one-to-many relationships are modeled inside the postSchema that references the  the user that create a post.
in addition, a user can "like" each post (his/others). Which there is added into the postSchema.

#### Updating/Deleting of POST

Each post and rating needs to know the user that submitted it. not just for display purposes, but to restrict the ability to update and/or delete a likes or the post itself of the user that submitted. te userId property in the  Schema holds the _id of the user that submitted the review and can therefore be compared to the logged in the users  _id to render the additional UI for updating/deleting.


## Example Routing

#### MEMORIES

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| GET | "/post" | getPost | View all the post regardless of who submitted (use querystring params to perform filtering) |
| GET | '/post/:id' | getPosts | View the details of any post |
| POST | '/post' | createPost | View a form for submitting a post |
| PATCH | 'post/:id '| updatePost | Handle the new recipe form being submitted |
| DELETE | '/post/:id'| deletePost | Delete a post(restrict to user who didnt submitted) |


#### FUTURE FEATURES 2.0
- Users can comment many post 
- Users can have their own profile 
- Users can chat with each other
- Users can review many post 