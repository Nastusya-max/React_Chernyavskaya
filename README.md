# Task 5
You have to add forms for creating new album and photos
1. Instead if creating hardcoded albums and photos you need to show modal window with necessary fields. Modal window must be independent component and can be used separately with different content. UI must include minimum number of features (see the picture). Try to use features that we mentioned in lecture (context or renderProps for content, portal for placement of modal window, or your own ideas)/ Implement simple validation
 
2. Add ErrorBoundry to your application
3. As we can have a lot of items from API response, we need to have a way to go to bottom of page. So you need to add a control inside of <Content/> component that will scroll to bottom of page on click (any UI for this control)
Additional task: as we don’t touch topic how to implement custom hooks, try to implement:
1. hook to get previous value of props, state, etc 
usePrevious(value)
2. hook that will repeat behavior of componentDidUnmount lifecycle method useComponentDidUnmount(callback)
