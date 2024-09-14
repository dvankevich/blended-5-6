//console.log(localStorage);

// localStorage.setItem("test", JSON.stringify([{
//   name: 'Bob'
// }]) )
// const value = JSON.parse(localStorage.getItem("test"))
// console.log(value[0]);
// console.log(value[0].name);



// console.log(localStorage.getItem("test"));

export function addDataToLocalSrtorage(key, value) {

  try {
    const normalaizedData = JSON.stringify(value)

    localStorage.setItem(key, normalaizedData)
    
  } catch (error) {

    console.log(error.message);
    
  }
}

export function getDataFromLocalStorage(key) {
  try {
    const lsData = localStorage.getItem(key)
    return lsData === null ? undefined : JSON.parse(lsData) 

  } catch (error) {
    console.log(error.message);
    
  }
}

export function removeDataLocalStorage(key) {
  try {
    localStorage.removeItem(key)

  } catch (error) {
    console.log(error.message);
  }
}

export function removeAllDataFormLocalStorage() {
  localStorage.clear()
}


