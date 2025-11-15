import { Outlet } from '@tanstack/react-router';
import Header from '../Header/Header';

const RootLayout: React.FC = () => {
      return (
            <div>
                  <Header />
                  <main>
                        <Outlet />
                  </main>
            </div>
      );
}

export default RootLayout;
