import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});
export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id,
  },
});
export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
// export default function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }
