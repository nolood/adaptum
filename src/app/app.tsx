import { type FC } from "react";
import "./styles/globals.css";
import { Providers } from "~/app/providers";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router";

const App: FC = () => {
  return (
    <Providers>
      <main className="dark text-foreground bg-background">
        <RouterProvider router={router} />
      </main>
    </Providers>
  );
};

export default App;
