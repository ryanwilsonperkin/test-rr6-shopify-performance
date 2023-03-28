import {createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import {Performance} from '@shopify/performance';

const performance = new Performance();
performance.on('navigation', ({target, isFullPageNavigation}) => {
  console.log({target, isFullPageNavigation});
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/example",
      element: <Example />,
    },
  ]);

  return <RouterProvider router={router} />;
}

function Home() {
  return (
    <div>
      <Link to="/example">Example</Link>
      <p>Current page: Home</p>
    </div>
  );
}

function Example() {
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Current page: Example</p>
    </div>
  );
}

export default App
