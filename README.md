# Favorite Dos
Select your favorite dogs, if you don't like then load six more.


## Live Application URL
The Application is deployed in https://kerimsisman.github.io/favorite-dogs

Click on the link to see the application


## Cloning and Running the Application in local
Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

### npm install
In order to run the application Type the following command

### npm start
The Application Runs on localhost:3000

### npm run test
  Runs below 4 test:
  #### -Show Six Dog.
  #### -Add to favorites button.
  #### -Exist in favorites.
  #### -Remove from favorites Button.



## Application design
### Components
  #### 1.DogItem Component:
        This Componenet displays individual dog images and button.
  #### 2.Card Component
        This Componenet gives a card view to DogItem.
  #### 3.DogList Component
        Create a list under <ul> tag by using DogItem
  #### 4.MainNavigation Component
        Displays header menu. Includes All Dogs/Favorites/ Load Next 6 >> buttons. The header is sticky   
  #### 5.AllDogs
        Reds data from context send this data to DogList component. Read data from  RandomDataContext
  #### 6.Favorites
        Reds data from context send this data to DogList component to view as favorites. Read data from  FavoritesContext
  #### 7.RandomDataContext
        Reads data from https://random.dog/woof.json . Read 6 suitable image from address, if response is not an image triew and other request.
  #### 8.FavoritesContext
        Reads and writes favorites to local storage
   
       
