import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Animation, AnimationProps } from "./Animation";
import "./App.css";
import { Loader } from "./Loader";
import { Thumbnail } from "./Thumbnail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/">
            <Route
              path=":id"
              element={
                <Loader
                  render={({
                    background,
                    foreground,
                    logo,
                  }: AnimationProps) => (
                    <Animation
                      background={background}
                      foreground={foreground}
                      logo={logo}
                    />
                  )}
                />
              }
            />
            <Route
              path="thumbnail/:id"
              element={
                <Loader
                  render={({
                    background,
                    foreground,
                    logo,
                  }: AnimationProps) => (
                    <Thumbnail
                      background={background}
                      foreground={foreground}
                      logo={logo}
                    />
                  )}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
