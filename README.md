# Javascript-Helpers

### object_get()
This function is tied to the window if is not yet defined. It was inspired by Laravel's array_get(). The first argument is an object / array / combination of both, and
the second argument is a string representation of the property you are trying to access. For example:
```
var o = {
  foo: {
    bar: {
      baz: [
        {
          doge: "wow"
        }
      ]
    }
  }
}

alert(object_get(o, 'foo.bar.baz.0.doge')); // This would output "wow"
```

JSFiddle: https://jsfiddle.net/juliusplaras/xw3o7xcx/

