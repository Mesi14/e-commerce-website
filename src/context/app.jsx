import { CartProvider } from "./cart";
import { FavProvider } from "./favourites";
import { LoginProvider } from "./login";

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
  LoginProvider,
  // ThemeProvider,
);

export default AppProvider;
