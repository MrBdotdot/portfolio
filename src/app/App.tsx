import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ProjectModalProvider } from "./components/ProjectModalContext";
import { ProjectModal } from "./components/ProjectModal";
import { ResumeModal } from "./components/ResumeModal";
import { ImagePreloader } from "./components/ImagePreloader";

export default function App() {
  return (
    <Router>
      <ProjectModalProvider>
        <ImagePreloader />
        <Header />
        <ProjectModal />
        <ResumeModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </ProjectModalProvider>
    </Router>
  );
}