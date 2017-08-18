# FrontEnd developer Test
## Dima Kush notes 
### sub tasks planning:
- 15.08.17 -> creating html layout, routing and directives
- 16.08.17 - 17.08.17 -> creating operating angular function(add, edit show, delete)
- 17.08.17 modify Gruntfile.js -> add minify css/js (and probably merge)
- 17.08.17 - 18.08.17 -> work with Karma and Jasmine
- 18.08.17 -> Release 

### Program overview:
This program allows user to add, edit delete, sort some list of music that can arrive from server.
To type image example, paste in corresponding input this: "img/albums/selena.jpg" 

### Program specification:
- Controllers/models. In this app we are using model hierarchy based on scopes.
  Every model are incapsulated into anonymous function due to hide objects for overwriting.
- There is a main model with it's mainControler which inherit other sub models(mainList, albumDetail,     albumAddEdit, albumDelete) and their controllers.
- They, in turn, inherited from model "songShop", which also inherit directives and route services
- For transmitting data from child to parent Ctrl(or other way) scope was used in order to avoid problem with loss data(like with "this" object)
- REST API was implemented with library ngResource
- some functions was implemented with underCore lib
- using ui-router instead standart angularJs router
- Grunt building. Added files to check Karma. Added minify and merge css function
- Jasmine test. Create tests to evaluate albumService GET and all storageService functions

ScreenShots(17.08.17):
### Main page:
<img src="src/html/img/preview.JPG" alt="page preview">

### Detail info (mobile version):
<img src="src/html/img/preview_detail.JPG" alt="page preview detail">

### Delete album (extra small mobile version):
<img src="src/html/img/preview_delete.JPG" alt="page preview delete">
