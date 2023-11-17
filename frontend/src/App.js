import Note from './components/Notes'
import Layout from './components/Layout'


function App() {
  return (
      <Layout>
        <div className="main">
          <h1>Zdravo svete!</h1>

            <Note />

        </div>
      </Layout>
  );
}

export default App;
