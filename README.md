# Fire TKD WEBSITE

## Visit
You can visit the website at [fire-ipc.vercel.app](https://fire-ipc.vercel.app)

## Documentation

### Add new page
1. Create a new file in `src/pages` with the name of the page you want to add (e.g. `Calendar.jsx`).
2. If you want css for the page, create a new file in `src/pages/css` with the name of the page you want to add (e.g. `Calendar.css`).
3. Add the code to the new file.
4. Add the page to the router array in `src/main.jsx` like so (Don't forget importing the page component)
```js
    {
        'path': '/calendar',
        'element': <Calendar />,
    }
```
Your page should now be available in the website.

### Add new localization
To add a new localization, you need to add a new key in both `en` and `bg` objects in `src\localization\main.json`. For example, if you want to add a new key `loginButtonText`, you should add it like this:

```json
{
    "en": {
        "loginButtonText": "Log In"
    },
    "bg": {
        "loginButtonText": "Влизане"
    }
}
```
Then if you add the `Text` component and telling it the key by displaying `<Text word="loginButtonText" />` it should now display `Влизане` or `Log In` depending on the set language.
