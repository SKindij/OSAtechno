# Component Documentation

1. **index.js** &emsp; - _performs an entry point to application and mounts it to the DOM;_
2. **App.js** &emsp; - _main component of the app, which is responsible for routing and displaying different pages;_

## ├── components/

### │   ├── common/

3. **Header.js** &emsp; - _displays the header, logo and navigation menu at the top of the page;_
4. **Spinner.js** &emsp; - _loading or progress animation, provides a visual wait indicator;_
5. **Footer.js** &emsp; - _displays additional information, links, contacts;_

### │   ├── pages/

6. **MainPage.js** &emsp; - _contains blocks (image, title, short description) with specific product groups;_
> _Each group of products will be a separate page that will open when the user clicks on the selected block._
7. **IndustrialGatesPage.js**
8. **ResidentialGatesPage.js**
9. **GarageRollersPage.js**
10. **WindowRollersPage.js**
> _-user sees complete list of products and their prices on the page of selected block;_\
> _-user chooses desired goods - by entering required quantity and pressing "select" button;_\
> _-selected accessories are added to a separate window ("OrderForm");_
11. **ProductDetails.js** &emsp; - _displays modal window with aditional information and images;_
12. **NotFoundPage.js** &emsp; - _displays a 404 page_
13. **index.js** &emsp; - _file with a generalized import/export of all page components_

### │   └── order/

14. **OrderForm.js**
> _-accessories selected by the user are displayed here;_\
> _-there is a form where the user can enter his data;_\
> _-here is the "Notes to order" field;_\
> _-contains "Delete item" and "Order Summary" buttons;_
> _-displays the overall summary of the order as a modal window;_\
> _-contains "Print" and "Save" buttons;_

## ├── database/
15. **GatesDatabase.js** &emsp; - _module that contains data about available gate accessories;_
16. **RollersDatabase.js** &emsp; - _module that contains data about available roller accessories;_
> _they are simply modules with data that will be imported into the required components;_

## ├── services/
17. **DataService.js** &emsp; - _service module that provides access to reading product data;_
18. **AuthService.js** &emsp; - _service module responsible for user authentication and authorization;_
