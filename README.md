# Task 4
You have to add state management of your application with Redux
1.	You need to implement action creators for albums, photos
2.	You need to implement reducers for albums, photos, user
3.	You need to review you components and “connect” store with application
4.	You need to add buttons “Add album” and “Add photo” after last items in corresponding lists. Clicking on this buttons must add new items with hardcoded values 
IMPORTANT NOTE: Considering limitations in API that it doesn’t add new items into list of albums or photos (it’s only return “OK” status), you need to think about how you should save new items. I propose you to use special field in reducer for new items, created locally. Resulted list for components should combine items from API and local added items. But you can discus with you mentors and find more suitable solution if you want. The main target of this task – move out of components business logic with storing and creating items with Redux 
