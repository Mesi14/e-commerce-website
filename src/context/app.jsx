import { CartProvider } from "./cart";
import { FavProvider } from "./favourites";

const combineComponents = (...components) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => (
        <AccumulatedComponents>
          <CurrentComponent>{children}</CurrentComponent>
        </AccumulatedComponents>
      );
    },
    ({ children }) => <>{children}</>,
  );
};

const AppProvider = combineComponents(
  CartProvider,
  FavProvider,
  // ThemeProvider,
);

export default AppProvider;
