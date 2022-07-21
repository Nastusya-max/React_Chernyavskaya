# Task 6
You have to add routing into your application
1.	Login page. You should redirect to this page in case if user isn’t authorized (‘/login’). There is simple form for login and password (I suppose you to use “email” as login and “username” as password)
2.	Add logout button somewhere at the top of header, or in component for user (it’ s up to us to decide where it should be). At click on this button – reset auth for user
3.	/albums – public route for page with all available albums (you mustn’t show information about user there)
4.	/albums/:albumId – public route for page with album’s photos (you mustn’t show information about user there)
5.	/user/:userId – private route. Available only for authorited users. Information about user and list of albums that belong this user
6.	/user/:userId/albums/:albumId - private route. Available only for authorited users. Information about user and list of photos from album
7.	/, /home – for authorized user it’s /user/:userId, for unathorized - /albums
8.	If you try to go on private route without auth – it has to redirect to /login page
