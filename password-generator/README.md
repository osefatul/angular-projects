# Password Generator:

## input vs change

- The `change` event fires in most browsers when content is changed and the element loses focus. It's basically an aggregate of changes. It will not fire for every single change as in the case input event.
- The `input` event fires synchronously on change of the content for the element. As such, the event listener tends to fire more frequently.
- Different browsers do not always agree whether a change event should be fired for certain types of interaction
- The `input` is the same as `onChange` event we use in react
