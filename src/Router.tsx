import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    // config the routes of the app
    // passing the :slug as a variable part of the route
    <Routes>
      <Route path="/" element={<Subscribe />}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/event/lesson/:slug" element={<Event />}/>
    </Routes>
  )
}