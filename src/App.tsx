import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import OnboardingScreen from "./pages/OnboardingScreen";
import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import ExploreScreen from "./pages/ExploreScreen";
import MapScreen from "./pages/MapScreen";
import PlaceDetailScreen from "./pages/PlaceDetailScreen";
import AddPlaceScreen from "./pages/AddPlaceScreen";
import AIChatScreen from "./pages/AIChatScreen";
import NotificationsScreen from "./pages/NotificationsScreen";
import ChatListScreen, { ChatDetailScreen } from "./pages/ChatScreen";
import ProfileScreen from "./pages/ProfileScreen";
import EditProfileScreen from "./pages/EditProfileScreen";
import SettingsScreen from "./pages/SettingsScreen";
import SuperUserScreen from "./pages/SuperUserScreen";
import PlansScreen from "./pages/PlansScreen";
import { OfflineScreen, FailedUploadScreen } from "./pages/ErrorScreens";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/place/:id" element={<PlaceDetailScreen />} />
          <Route path="/add-place" element={<AddPlaceScreen />} />
          <Route path="/ai-chat" element={<AIChatScreen />} />
          <Route path="/notifications" element={<NotificationsScreen />} />
          <Route path="/messages" element={<ChatListScreen />} />
          <Route path="/chat/:id" element={<ChatDetailScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/edit-profile" element={<EditProfileScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/super-user" element={<SuperUserScreen />} />
          <Route path="/plans" element={<PlansScreen />} />
          <Route path="/offline" element={<OfflineScreen />} />
          <Route path="/upload-failed" element={<FailedUploadScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
