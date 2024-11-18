export default function reservationReducer(state, action) {
  switch (action.type) {
    case "ADD_RESERVATION":
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case "UPDATE_RESERVATION":
      return {
        ...state,
        reservations: state.reservations.map((reservation) =>
          reservation.id === action.payload.id ? action.payload : reservation
        ),
      };
    case "DELETE_RESERVATION":
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id
        ),
      };
    case "UPDATE_AVAILABILITY":
      return {
        ...state,
        availableTimes: state.availableTimes.filter(
          (time) =>
            state.reservations.find(
              (reservation) =>
                reservation.date === action.payload && reservation.time === time
            ) === undefined
        ),
      };
    default:
      return state;
  }
}
