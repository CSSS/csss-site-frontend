For some reason the Angular FontAwesome package doesn't document what an `IconDefinition`'s type
are, so I'm typing it out here. [ Angular FontAwesome Documentation ](https://github.com/FortAwesome/angular-fontawesome/blob/main/docs/guide/custom-icons.md)

```typescript
export interface {
  prefix: string; // The package the icon resides in (just use `csss` if you're not sure)
  iconName: string; // The name of the icon to use when importing it
  icon: [
    number,   // viewBox width
    number,   // viewBox height
    string[], // litgatures  (not used in Angular FontAwesome, so just pass in an empty array)
    string,   // unicode (not used in Angular FontAwesome, so just pass in an empty string)
    string | string[] // paths of the SVG
  ]
}
```
