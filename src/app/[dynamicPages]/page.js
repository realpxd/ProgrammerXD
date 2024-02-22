"use client"
import { useRouter, usePathname } from 'next/navigation';

import Home from '../components/home/Home';
import NavBar from '../components/NavBar';
import Projects from '../components/projects/Projects';

const Page = () => {

  const pagesFactory = {
    home: Home,
    projects: Projects,
  }
  const page = usePathname()
  const curPage = page.split('/')[1].toString()
  var ContentComponent = Home;

  for (const name in pagesFactory) {
    if (page.split('/')[1].toString() === name.toString()) {
      ContentComponent = pagesFactory[name];
      break; // Terminate the loop if a match is found
    }
  }

  return (
    <>
      <NavBar />
      {ContentComponent && <ContentComponent />}
    </>
  );
}

export default Page;
