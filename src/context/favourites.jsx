import { createContext, useState, useEffect } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  // to create a separate function with key param to replace favItems
  const storage = localStorage.getItem('favItems') ? JSON.parse(localStorage.getItem('favItems')) : []; 
  const [favItems, setFavItems] = useState(storage);

  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(favItems));
  }, [favItems])

  useEffect(() => {
    const favItems = localStorage.getItem("favItems");
    if(favItems) {
      setFavItems(JSON.parse(favItems));
    }
  }, [])

  const addItemToFav = item => {
    const isPresent = favItems.some((favItem) => favItem.id === item.id)
    if (!isPresent) {
      setFavItems((prevItems) => [...prevItems, item]);
    } else {
      removeItemFromFav(item);
    }
  };


  const removeItemFromFav = (item) => {
   setFavItems((prevItems) => prevItems.filter(favItem => favItem.id !== item.id)); 
  };

  const emptyFav = () => {
    setFavItems([]);
  }

  return (
    <FavContext.Provider
      value={{
        favItems,
        addItemToFav,
        removeItemFromFav,
        emptyFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}
