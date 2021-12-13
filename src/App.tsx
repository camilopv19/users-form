import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Steps from "./Users/Steps/Steps";
import UsersList from "./Users/UsersList";

// const mockUser = {
//   id: '3',
// firstName: 'Full-stack Engineer',
// lastName: 'ethereum IRA',
// email: 'engineer@ethereumira.com',
// city: 'Los Santos',
// country: 'USA',
// dateOfBirth: '01/01/1666',
// mobile: '800-245-8789'
// };
const RoutedApp: React.FC = () => {
  let routes = useRoutes([
    { path: "/", element: <Steps /> },
    { path: ":step", element: <Steps /> },
    { path: "/list", element: <UsersList /> },
  ]);
  return routes;
};

function App() {
  return (
    <>
      <Router>
        <RoutedApp />
      </Router>
    </>
  );
}

export default App;
