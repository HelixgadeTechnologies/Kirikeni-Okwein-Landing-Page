import Sidebar from '@/components/SideBar';
import TopBar from '@/components/TopBar';

const Layout = ({ children, ActivePage }) => {
  return (
    <div className="flex h-[100vh] w-[100vw] bg-white">
      <Sidebar ActivePage={ActivePage}/>
      <div>
        <TopBar/>
        <main className="block flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
