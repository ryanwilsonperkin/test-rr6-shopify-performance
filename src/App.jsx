import {createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import {Performance} from '@shopify/performance';
import {PerformanceContext, usePerformanceMark, Stage} from '@shopify/react-performance';

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

  return (
    <PerformanceContext.Provider value={performance}>
      <RouterProvider router={router} />
    </PerformanceContext.Provider>
  );
}

function Home() {
  usePerformanceMark(Stage.Complete, 'home');
  return (
    <div>
      <Link to="/example">Example</Link>
      <p>Current page: Home</p>
    </div>
  );
}

function Example() {
  usePerformanceMark(Stage.Complete, 'example');
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Current page: Example</p>
    </div>
  );
}

export default App
