import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Layout } from 'antd';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
      <Layout style={{ minHeight: '100vh', height: '100%', }}>
        <Layout.Header>
          <NavigationBar />
        </Layout.Header>
        <Layout.Content style={{ height: '100%', padding: '20px 40px' }}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Layout.Content>
      </Layout>
  );
}

export default App;
