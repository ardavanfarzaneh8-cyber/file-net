import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Intro from './screens/Intro'
import Auth from './screens/Auth'
import Home from './screens/Home'
import PropertyDetail from './screens/PropertyDetail'
import Listings from './screens/Listings'
import AdvancedSearch from './screens/AdvancedSearch'
import SelectDistrict from './screens/SelectDistrict'
import Customers from './screens/Customers'
import Requests from './screens/Requests'
import Chat from './screens/Chat'
import Messages from './screens/Messages'
import Filing from './screens/Filing'
import NewFile from './screens/NewFile'
import SendMessage from './screens/SendMessage'
import Profile from './screens/Profile'
import PublicAds from './screens/PublicAds'
import AgentSite from './screens/AgentSite'
import Notifications from './screens/Notifications'
import Tools from './screens/Tools'

function App() {
  const location = useLocation()

  return (
    <div className="app-shell" dir="rtl">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/advanced-search" element={<AdvancedSearch />} />
          <Route path="/select-district" element={<SelectDistrict />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/filing" element={<Filing />} />
          <Route path="/new-file" element={<NewFile />} />
          <Route path="/send-message" element={<SendMessage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/public-ads" element={<PublicAds />} />
          <Route path="/agent-site" element={<AgentSite />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
