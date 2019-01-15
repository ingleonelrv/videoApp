// Importamos NavigationActions
import { NavigationActions } from 'react-navigation';

// Creamos un Navigator. Más adelante se explica qué es
let _navigator;

// Declaramos la función para decirle a ReactNavigation cuál es nuestro Navigator. 
// Lo mismo de antes, luego se explica qué es
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

// Creamos las funciones que nos parezcan necesarias (navigate, back, etc.)
function navigate(routeName, params) {
  // Usamos el método dispatch del Navigator
  _navigator.dispatch(
    // Lo que ya sabemos de navigate
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
// Creamos la función para volver
// (El parámetro de key es opcional, lo puse por si lo necesitásemos en un futuro)
function back(key = {}) {
    _navigator.dispatch(
      NavigationActions.back(key)
    )
  }

// Exportamos las funciones (de crear otra función, mencionarla aquí)
export default {
  navigate,
  setTopLevelNavigator,
  back
};