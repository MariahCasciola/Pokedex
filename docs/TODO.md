# TODO

## Logic for creating Dynamic Color Pallete

+ Default colors in the second parameter of setProperty to black and default to an original color pallete in global.css.
+ Name the global variables color, accent color, primary color 1, primary color 2.
+ Use a color picker to analyze sprites.

## Logic for 60%, 30%, 10%, 5 colors in pallete

+ Primary: 60%
  + The primary color covers the maximum of the design “real estate” — in other words, about 60 percent of the space on a page. For instance, it is generally the color used in the ```background```.

+ Secondary: 30%
  + Occupies around 30 percent of the design area. Most of the time, it is the color of the ```text elements that float over the primary color```.

+ Accent: 10%
  + Finally, the accent color highlights small but crucial design details, which should only make up about 10 percent of the design area. Call-to-action ```buttons and hyperlinks``` are the most common places where an accent color is applied.

## List of todos

+ ACCOUNT FOR SPACING AFTER THE FIRST WORD

+ Create a nav bar that allows you pick what you search by
  + Impliment a search bar by
    + name
    + generation
    + type
    + ability
    + hidden ability
    + best move sets
    + shiny form

+ Add a feature to add pokemon to your pokedex, after the first selection through the search

+ Ask the user to click the Pokemon by saying "Pick me" when they hover over their card.

+ render a little cute sleepy character when there are no results???

+ allow the user to make the limit by number/generation?

+ DECIDE ON A DESIGN FOR THE FRONT PAGE

+ Design a pokedex to show case the pokemon you find on the search engine

+ organize css files to match their component names (separate sass and css inside styling folder)

+ add setTimeout(()=>) function so that no so many api calls are made during a search

+ MAKE SURE DEFAULT PALLETE WORKS IN ORDER TO HANDLE UNDEFINED ELEMENT.STYLE VALUES. By changing default value to: ```const defaultPalette = {
    one: "#2d3142",
    two: "#4a9cef",
    three: "#e6e69c",
    four: "#c0c0c0",
    five: "#de4242",
  };```

## DONE

+ Only pokemon with sprites will be listed in the name search.
+ ADD A .CATCH TO LIST FETCHER
+ When the user clicks a search result and confirms, a color picker analyzes the sprite, makes web page colored after the pallete of the sprite.
+ Installed extract-colors package
+ Created a global css file and imported to every component.
+ Starting screen "Pick your favorite pokemon", user types name in the form and the api calls the sprite based on the name.
+ Add a search button that clears the field upon the submission, and prevent the default behavior of submission form.
+ Render number of results
+ Impliment a search bar by name (acount for how users would write shiny names, example, a space after pickachu)
+ add an abort controller to search name request
+ Call the api and make a list of pokemon names, filter through the names and see which includes partial matches (limit is 100,000 in url)
+ filters name searches, and list all of the results
+ create a functioning submit button
+ be able to delete text after typing
