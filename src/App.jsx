import MainLayout from "./components/layout/MainLayout"
import AppProvider from "./context/AppContext"
// import AppRoutes from "./routes"

function App() {

  return (
    // <AppRoutes/>
    <AppProvider>
      <MainLayout/>
    </AppProvider>
  )
}

export default App
