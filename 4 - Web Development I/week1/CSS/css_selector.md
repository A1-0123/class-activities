### CSS Selector Parent Child Sibling Adjacent Sibling

CSS selectors are used to select the HTML elements you want to style. There are many different types of selectors in CSS and you will use different selectors for different things. In this lesson, we will learn about the most common CSS selectors.

## Parent Child Selector

The parent child selector is used to select all elements that are a direct child of another element. The child element is nested inside the parent element. The child element will only be selected if it is a direct child of the parent element. The child element will not be selected if it is nested further inside another element.

```css
/* Selects all li elements that are a direct child of an ul element */
ul > li {
  color: red;
}
```

## Sibling Selector

The sibling selector is used to select all elements that are a sibling of another element. The sibling element can be placed anywhere inside the parent element. The sibling element will be selected if it is placed directly after another element, or if there are multiple sibling elements that are separated by other sibling elements.

```css
/* Selects all p elements that are a sibling of an h1 element */
h1 + p {
  color: red;
}
```

## Adjacent Sibling Selector

The adjacent sibling selector is used to select all elements that are a sibling of another element. The sibling element can be placed anywhere inside the parent element. The sibling element will only be selected if it is placed directly after another element.

```css
/* Selects all p elements that are a sibling of an h1 element */
h1 ~ p {
  color: red;
}
```

## CSS Selector Combinator

The CSS selector combinator is used to select elements based on their relationship to another element. There are three different types of CSS selector combinators: the parent child selector, the sibling selector, and the adjacent sibling selector.

```css
/* Selects all li elements that are a direct child of an ul element */
ul > li {
  color: red;
}

/* Selects all p elements that are a sibling of an h1 element */
h1 + p {
  color: red;
}

/* Selects all p elements that are a sibling of an h1 element */

h1 ~ p {
  color: red;
}
```

### Attribute Selector

The attribute selector is used to select elements with a specified attribute.

```css
/* Selects all elements with target attribute */
a[target] {
  color: red;
}
```

### Attribute Value Selector

The attribute value selector is used to select elements with a specified attribute value.

```css
/* Selects all elements with target="_blank" attribute */
a[target="_blank"] {
  color: red;
}
```

### Attribute Contains Selector

The attribute contains selector is used to select elements with a specified attribute value, containing a specified substring.

```css
/* Selects all elements with title attribute containing the word "image" */
a[title*="image"] {
  color: red;
}
```

### Attribute Type Selector

The attribute type selector is used to select elements with a specified attribute name, based on the attribute type.

```css
/* Selects all elements with href attribute */
a[href] {
  color: red;
}

/* Selects all elements with checkbox attribute */

input[type="checkbox"] {
  color: red;
}
```

### Attribute Starts With Selector

The attribute starts with selector is used to select elements with a specified attribute value, starting with a specified substring.

```css

/* Selects all elements with title attribute starting with the word "image" */
a[title^="image"] {
  color: red;
}
```

### Attribute Ends With Selector

The attribute ends with selector is used to select elements with a specified attribute value, ending with a specified substring.

```css
/* Selects all elements with title attribute ending with the word "image" */
a[title$="image"] {
  color: red;
}
```
