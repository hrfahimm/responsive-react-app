// import React from "react";
// import useAuth from "../../../Hooks/useAuth";

// import { Route } from "react-router-dom";
// import { Spinner } from "react-bootstrap";

// const PrivateRoute = ({ children, ...rest }) => {
//   const { user,isLoading } = useAuth();
//if(isLoading){
//return  <Spinner animation="border" variant="danger" />
//}
//   return (
//     <div>
//       <Route
//         {...rest}
//         render={({ locatin }) =>
//           user.email ? (
//             children
//           ) : (
//             <Redirect
//               to={{
/* //                 pathname: "/login", */
//                 /* state: { from: location },*/
//               }}
//             ></Redirect>
//           )
//         }
//       ></Route>
//     </div>
//   );
// };

// export default PrivateRoute;
