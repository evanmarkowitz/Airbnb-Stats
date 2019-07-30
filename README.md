## Description

Airbnb Analytics is an application that allows users to sort through Airbnb listings in New York city.  They are able to sort by the Type of Apartment, as well as sort by the neigborhood.  When a filter has been chosen, the map, powered by Google Maps, will zoom into the neighborhood and reveal listings in that neghborhood.  These listings can be clicked on and their information will be rendered on the page.

It uses Redux to store the fetched data locally and React on the front end.  Additionally the Google Maps React Component is used to dynamically display the data.

**Click 'Type of apartment'** to enable the dropdown and then filter by apartment type.

**Click 'Borough'** to enable the dropdown and then select the borough you would like to explore.

**Click one one of the neigborhoods** and this will zoom into the neighborhood.

**Click on the map marker** and this will display the listings information on the Selected Apartment component.

## Installation

```
git clone https://github.com/evanmarkowitz/Airbnb-Stats.git
```
Once you have cloned the repo, install the library dependencies. Run:

```
npm install
```
To view the app in action, run the following command in your terminal:

```
npm start
```
Then, go to http://localhost:3001/ in your browser to see the code running in the browser.


## Learning goals

- Learn how to wireframe and build out a concept from scratch.
- Utilize Redux actions, reducers, store, methods, setup.
- Keep state based components to a minimum and leverage more functional components.
- Use a modular architecture for your application file structure.
- Use propTypes for every component receiving props.

## Screenshots

![Filtering](https://github.com/evanmarkowitz/Airbnb-stats/blob/master/src/Images/Filtering.gif)
![Selecting](https://github.com/evanmarkowitz/Airbnb-stats/blob/master/src/Images/Selecting.gif)
