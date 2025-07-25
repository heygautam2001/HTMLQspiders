/**
 * ! Storage API
 * It allows us to store the data in the browser.
 * we have two types pf storage 
 * 1. Session Storage 
 * 2. Loacal Storage
 * 
 * 
 * ? Session Storage:
 * It will store the data for a specific period of time.
 * Once we closed the tab or etc activities will automatically delete the data.
 * 
 * ? Local Storage
 * It will store the data permanently.
 * 
 * ! Methods
 * ? setItem();
 * It will add the data and as well as update the data.
 * Syntax : window.storageType.setItem("Key" , "value");
 * localStorage.setItem("username","ankitt");
 * sessionStiorage.setItem("username", "ankit");
 * 
 * ?  getItem():
 * It will retrieve the data from storage.
 * syntax : window.storageType.getItem("Key");
 * 
 * removeItem():
 * It will remove the data from storage
 * window.storage.removeItem("key")
 * 
 * ? clear():
 * it will delete whole data.
 */