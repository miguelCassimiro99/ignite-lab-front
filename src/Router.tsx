import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
  return (
    // config the routes of the app
    // passing the :slug as a variable part of the route
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/event/lesson/:slug" element={<Event />}/>
    </Routes>
  )
}