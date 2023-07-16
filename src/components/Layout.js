import Sidebar from '@/components/SideBar';
import TopBar from '@/components/TopBar';

const Layout = ({ children, ActivePage, h }) => {
  return (
    <div className="flex min-h-[100vh] w-[100vw] bg-white ">
      <Sidebar ActivePage={ActivePage}/>
      <div className='md:ml-[17.8vw] '>
        <TopBar h={h}/>
        <main className="block flex-grow mt-[80px]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
