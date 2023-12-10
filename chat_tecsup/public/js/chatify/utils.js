/**
 * Convierte una cadena de fecha a una cadena de tiempo transcurrido.
 * @param dateString - La cadena de fecha para convertir a una cadena de tiempo transcurrido.
 * @returns Una cadena que indica al usuario cuánto tiempo ha pasado desde la fecha.
 */
function dateStringToTimeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    if (seconds < 60) {
      return "justo ahora";
    } else if (minutes < 60) {
      return `hace ${minutes} minutos`;
    } else if (hours < 24) {
      return `hace ${hours} horas`;
    } else if (days < 7) {
      return `hace ${days} días`;
    } else {
      return `hace ${weeks} semanas`;
    }
  }

  /**
   * Retorna una función que, cuando se invoca, espera un tiempo especificado antes de ejecutar
   * la función original.
   * @param callback - La función que se ejecutará después del retraso.
   * @param delay - La cantidad de tiempo a esperar antes de llamar a la función de retorno de llamada.
   * @returns Una función que llamará a la función de retorno de llamada después de un retraso.
   */
  function debounce(callback, delay) {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }
