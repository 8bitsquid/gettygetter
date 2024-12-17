# Getty GETter

This project represents my first attempt at building a Vue 3 application and is my code sample submission to members of the search committee and Collections Platforms & Data department at [the Getty](https://www.getty.edu/). Documented in a semi "code-journaling" style, the READMEs and code comments found throughout will hopefully clarify my reasoning in the app's design. Since repo is intended for a limited audience,
the docs assume the reader is familiar with [Vue](https://vuejs.org/) and [Vite](https://vite.dev/).

If you'd like to skip the pre-amble and get straight to the docs, See *[Reading the source](#reading-the-source)*. 

## The Challenge

> In roughly a day's worth of work, build an app that features a UI component, populated with data from [UAAT](https://www.getty.edu/research/tools/vocabularies/aat/), [ULAN](https://www.getty.edu/research/tools/vocabularies/ulan/index.html), or any other [Getty API](https://data.getty.edu/).

The first time I built with Vue was [earlier this month](https://github.com/8bitsquid/getty-vue-project). Liking a good challenge, I decided to build the "day's work" app using Vite + Vue 3. After reading through Vue/Vite docs, poking around the [Getty Vocabularies: LOD](https://vocab.getty.edu/), and trying to decipher some almost alchemical SPARQL queries from the Getty Vocab docs, the goal was decided. 

## The Goal

In roughly ~8hr(ish), build a search/query UI over the [vocab.getty.edu/sparql.json](https://vocab.getty.edu/sparql) endpoint. ~8hrs is a bit short of a full-featured search UI for complex data, so why not build a simple app designed with extensibility in mind, like I did with [my previous frontend work](#my-frontend-experience).

## App Outline
The app will take in a search string entered by the user. Submitting triggers a `RunSearch` event that other components can listen for. It passes the search string to the app's API service, which queries the SPARQL endpoint and awaits the response.
The response is then passed to another component to render the search results.

![Basic outline of how data flows through the app](app-outline.jpg)
## Reading the source

### Just Follow the READMEs
The source may be best read from Github, as you can follow the links in the `README` files. Each `REAMDE.md` describes the general purpose, layout, etc..., of the files in the same directory and typically links to other `README`s. For implementation details, check the comments in the source files.

This [src/README](src/README.md) is a good place to start.

## Running the App

```bash
# Clone the repo and `cd` into project root
$ git clone git@github.com:8bitsquid/gettygetter.git && cd gettygetter

# Install Node dependencies, build, and run preview
$ npm install
$ npm run build && npm run preview

```

### Testing
```bash
$ npm run test
```

## Lessons Learned

#### Unused Parts
The app is mostly complete, with only one unused composable from my original plans - the [pagination composable](src/core/composables//pagination.js)

#### Too many toys
As with many modern apps, the number of tools and frameworks used inflates development time. Learning the tools and having templated configs in scaffolding is key to reducing toil.

Of the frameworks I used, hoping to create short-cuts in developing, [Elemnt Plus](https://element-plus.org/en-US/) was the main offender in adding unneeded complexity to the project. The components offered looked promising, but implementation of some was much more complex than anticipated and ate in the time-limit. In the future, it's probably better to use more stripped down frameworks for projects like this.

<a name="notes"></a>
## Notes

### My Frontend Experience

I was given the option to present a front-end app I have written professionally but unfortunately, I don't have any show-able front-end work from the last few years *(read: Trapped in private repos)*

Although doing heavier backend work recent, I have deep roots in front-end app design. Specifically with [AngularJS](https://angularjs.org/). 
The University of Alabama Libraries still uses most of the AngularJS apps I built during my time there as a Senior Fullstack Engineer. 
Perhaps most notably the "bento box" search component [OneSearch](https://www.lib.ua.edu/#/bento/J.%20Paul%20Getty) - a modular, configurable, and pluggable federated search app. OneSearch made adding new search engines to the frontend easy - just [5 simple steps](https://ualibweb.github.io/oneSearch_ui/#/api/engines).

