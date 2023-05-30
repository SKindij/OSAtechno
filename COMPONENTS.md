# Component Documentation

1. **index.js** &emsp; - _performs an entry point to application and mounts it to the DOM;_
2. **App.js** &emsp; - _main component of the app, which is responsible for routing and displaying different pages;_

## ├── components/

### │   ├── common/

3. **Header.js** &emsp; - _displays the header, logo and navigation menu at the top of the page;_
4. **Navbar.js** &emsp; - _navigation bar with links for quick access to different parts of the site;_
5. **Spinner.js** &emsp; - _loading or progress animation, provides a visual wait indicator;_
6. **Footer.js** &emsp; - _displays additional information, links, contacts;_

### │   ├── pages/

7. **MainPage.js** &emsp; - _contains blocks (image, title, short description) with specific product groups;_
> _Each group of products will be a separate page that will open when the user clicks on the selected block._
8. **IndustrialGatesPage.js**
9. **ResidentialGatesPage.js**
10. **GarageRollersPage.js**
11. **WindowRollersPage.js**
> _-user sees complete list of products and their prices on the page of selected block;_\
> _user chooses desired goods - by entering required quantity and pressing "select" button;_\
> _selected accessories are added to a separate window ("OrderForm");_
12. **ProductPage.js** &emsp; - _displays a single product as a card with information and images;_
13. **NotFoundPage.js** &emsp; - _displays a 404 page_

### │   └── order/

14. **OrderForm.js**
> _accessories selected by the user are displayed here;_\
> _there is a form where the user can enter his data;_\
> _here is the "Notes to order" field;_
> _contains "Delete" and "View" buttons at the bottom;_
15. **OrderSummary.js**



## ├── database/




## ├── services/










