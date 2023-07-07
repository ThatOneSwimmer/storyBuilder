import { Routes, Route } from 'react-router-dom';
import { ReferenceDataContextProvider } from "./ReferenceDataContext"
import Main from './Pages/Main';
import Result from './Pages/Result';
import ReadingLevel from './Pages/ReadingLevel';
import Animal from './Pages/Animal';
import Name from './Pages/Name'

const App = () => {
  return (
    <>
      <ReferenceDataContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
          <Route path="/readinglvl" element={<ReadingLevel />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/name" element={<Name />} />
        </Routes>
      </ReferenceDataContextProvider>
    </>
  )
}


export default App;
