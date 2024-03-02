import { Drawer } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

const pages = [
  { name: 'Add Workflow', path: '/dashboard/add-workflow' },
  { name: 'Workflows', path: '/dashboard/workflows' },
  { name: 'Workflows Runs', path: '/dashboard/runs' },
  { name: 'Jobs', path: '/dashboard/jobs' },
];

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState<string>();
  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false);
  useEffect(() => {
    const page = pages.find(page =>
      window.location.pathname.includes(page.path),
    );
    if (page) {
      setSelectedPage(page.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);
  return (
    <>
      <div className="hidden lg:block p-5 w-[300px] bg-secondary text-white">
        <h3>Catalyst</h3>
        <ul className="p-4">
          {pages.map(page => (
            <li
              key={page.name}
              className={`p-2 my-3 rounded-lg ${
                selectedPage === page.name ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              <Link
                to={page.path}
                className="cursor-pointer w-full block"
                onClick={() => setSelectedPage(page.name)}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden fixed right-4 top-4">
        <button
          onClick={() => setOpenSidebarDrawer(true)}
          className="text-white text-3xl p-2 m-3 border border-solid border-tertiary bg-secondary rounded-lg "
        >
          <IoMenu />
        </button>
      </div>
      <Drawer
        className="[&>.MuiDrawer-paper]:p-5 [&>.MuiDrawer-paper]:bg-secondary [&>.MuiDrawer-paper]:w-[300px] text-white"
        open={openSidebarDrawer}
        onClose={() => setOpenSidebarDrawer(false)}
      >
        <h3>Catalyst</h3>
        <ul className="p-4">
          {pages.map(page => (
            <li
              key={page.name}
              className={`p-2 my-3 rounded-lg text-white ${
                selectedPage === page.name ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              <Link
                to={page.path}
                className="cursor-pointer w-full block"
                onClick={() => {
                  setSelectedPage(page.name);
                  setOpenSidebarDrawer(false);
                }}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default Sidebar;