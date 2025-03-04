import { createContext, useState, useEffect } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favItems, setFavItems] = useState(localStorage.getItem('favItems') ? JSON.parse(localStorage.getItem('favItems')) : []);

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
    console.log(item)
    if (!favItems.includes(item)) {
      setFavItems([...favItems, item]);
    } else {
      setFavItems(favItems)
    }
  };

  const removeItemFromFav = (item) => {
   setFavItems(favItems.filter(favItem => favItem.id !== item.id));
    
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
