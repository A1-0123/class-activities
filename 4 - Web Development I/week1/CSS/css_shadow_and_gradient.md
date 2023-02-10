### CSS Pseudo-classes

Here is a CSS pseudo-class example:

explain the code here
```css
#main {
  color: red;
  /* pseudo-class */
}
#main:hover {
  color: blue;
}
```

pseudo-class: is a property that allows you to add a pseudo-class to an element. The pseudo-class property takes values for:

- pseudo-class: the pseudo-class to use ex. hover, active, focus, link, visited, first-child, last-child, nth-child, first-of-type, last-of-type, nth-of-type, only-of-type, only-child, root, target, enabled, disabled, checked, indeterminate, not, lang, empty, optional, required, read-only, read-write, valid, invalid, in-range, out-of-range, default, scope, placeholder-shown, user-error, user-invalid, user-valid, dir, any-link, local-link, target-within, target-text, focus-within, focus-visible, focus, focus-vi

example: `#main:hover {`

- hover: pseudo-class

`color: blue;`

- color: blue: style

### CSS Box Shadow

Here is a CSS shadow example:

explain the code here
```css
#main {
  box-shadow: 10px 10px 5px #888888;
  /* box-shadow */
}
```

box-shadow: is a property that allows you to add a shadow to an element. The box-shadow property takes values for:

- horizontal offset: how far to push the shadow horizontally from the element ex. 10px, 5px, 2px
- vertical offset: how far to push the shadow vertically from the element ex. 10px, 5px, 2px
- blur radius: how blurred the shadow should be ex. 5px, 10px, 2px
- spread radius: how much the shadow should spread out ex. 5px, 10px, 2px
- color: the color of the shadow ex. #888888, #000000, #FFFFFF

example: `box-shadow: 10px 10px 5px #888888;`

- 10px: horizontal offset
- 10px: vertical offset
- 5px: blur radius
- #888888: color

### CSS Text Shadow

Here is a CSS shadow example:

explain the code here
```css
#main {
  text-shadow: 2px 2px #FF0000;
  /* text-shadow */
}
```

text-shadow: is a property that allows you to add a shadow to text. The text-shadow property takes values for:

### CSS Gradient

Here is a CSS gradient example:

explain the code here
```css
#main {
  background: linear-gradient(to right, red , yellow);
  /* linear-gradient */
}
```

linear-gradient: is a property that allows you to add a gradient to an element. The linear-gradient property takes values for:

- direction: the direction of the gradient ex. to right, to left, to top, to bottom
- color stops: the colors of the gradient ex. red, yellow, blue

example: `linear-gradient(to right, red , yellow);`

- to right: direction
- red: color stop
- yellow: color stop

### CSS Transition

Here is a CSS transition example:

explain the code here
```css
#main {
  transition: width 2s;
  /* transition */
}
```

transition: is a property that allows you to add a transition to an element. The transition property takes values for:

- property: the property to transition ex. width, height, background-color, color
- duration: the duration of the transition ex. 2s, 1s, 500ms
- timing function: the timing function of the transition ex. ease, ease-in, ease-out, ease-in-out, linear
- delay: the delay of the transition ex. 2s, 1s, 500ms


example: `transition: width 2s ease-in 1s;`

- width: property
- 2s: duration
- ease-in: timing function
- 1s: delay

### CSS Animation

Here is a CSS animation example:

explain the code here
```css
#main {
  animation: mymove 5s infinite;
  /* animation */
}
```

animation: is a property that allows you to add an animation to an element. The animation property takes values for:

- name: the name of the animation ex. mymove, mymove2, mymove3
- duration: the duration of the animation ex. 2s, 1s, 500ms
- timing function: the timing function of the animation ex. ease, ease-in, ease-out, ease-in-out, linear
- delay: the delay of the animation ex. 2s, 1s, 500ms
- iteration count: the number of times the animation should run ex. infinite, 5, 10
- direction: the direction of the animation ex. normal, alternate, reverse, alternate-reverse
- fill mode: the fill mode of the animation ex. forwards, backwards, both, none

example: `animation: mymove 5s ease-in 1s infinite;`

- mymove: name
- 5s: duration
- ease-in: timing function
- 1s: delay
- infinite: iteration count

### CSS Transform

Here is a CSS transform example:

explain the code here
```css
#main {
  transform: rotate(20deg);
  /* transform */
}
```

transform: is a property that allows you to add a transform to an element. The transform property takes values for:

- transform function: the transform function to use ex. rotate, scale, translate, skew

example: `transform: rotate(20deg);`

- rotate: transform function
- 20deg: value

### CSS Filter

Here is a CSS filter example:

explain the code here
```css
#main {
  filter: blur(4px);
  /* filter */
}
```

filter: is a property that allows you to add a filter to an element. The filter property takes values for:

- filter function: the filter function to use ex. blur, brightness, contrast, grayscale, hue-rotate, invert, opacity, saturate, sepia

example: `filter: blur(4px);`

- blur: filter function
- 4px: value

### Animation Example

Here is a CSS animation example:

explain the code here
```css
#main {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  /* animation */
}
@keyframes example {
  0%   {background-color: red; left:0px; top:0px;}
  25%  {background-color: yellow; left:200px; top:0px;}
  50%  {background-color: blue; left:200px; top:200px;}
  75%  {background-color: green; left:0px; top:200px;}
  100% {background-color: red; left:0px; top:0px;}
}
```

animation-name: is a property that allows you to add a name to an animation. The animation-name property takes values for:

- name: the name of the animation ex. example, example2, example3

example: `animation-name: example;`

- example: name

animation-duration: is a property that allows you to add a duration to an animation. The animation-duration property takes values for:

- duration: the duration of the animation ex. 2s, 1s, 500ms

example: `animation-duration: 4s;`

- 4s: duration

animation-iteration-count: is a property that allows you to add an iteration count to an animation. The animation-iteration-count property takes values for:

- iteration count: the number of times the animation should run ex. infinite, 5, 10

example: `animation-iteration-count: infinite;`

- infinite: iteration count

@keyframes: is a property that allows you to add keyframes to an animation. The @keyframes property takes values for:

- name: the name of the animation ex. example, example2, example3
- percentage: the percentage of the animation ex. 0%, 25%, 50%, 75%, 100%
- style: the style of the animation ex. background-color, left, top

example: `@keyframes example {`

- example: name

`0%   {background-color: red; left:0px; top:0px;}`
- 0%: percentage
- background-color: red; left:0px; top:0px: style

`25%  {background-color: yellow; left:200px; top:0px;}`
- 25%: percentage
- background-color: yellow; left:200px; top:0px: style

`50%  {background-color: blue; left:200px; top:200px;}`
- 50%: percentage
- background-color: blue; left:200px; top:200px: style

`75%  {background-color: green; left:0px; top:200px;}`
- 75%: percentage
- background-color: green; left:0px; top:200px: style

`100% {background-color: red; left:0px; top:0px;}}`
- 100%: percentage
- background-color: red; left:0px; top:0px: style

