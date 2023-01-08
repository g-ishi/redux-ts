import ReactDOM from 'react-dom/client';
import App from './components/App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

const Root = () => {
  return (
    <div>
      <App />
    </div>
  );
};

root.render(<Root />);
