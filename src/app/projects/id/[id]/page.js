"use client"
import { useRouter, usePathname } from 'next/navigation';
import ProjectPage from './ProjectPage';

const Page = () => {

    const page = usePathname()
    const router = useRouter()

    const rootPage = page.split('/')[1].toString()
    const prevPage = page.split('/')[2].toString()
    const curPage = page.split('/')[3].toString()
    if (rootPage != 'projects' || prevPage != 'id') {
        router.push('/home')
    }


    return (
        <ProjectPage
            id={curPage}
        />
    );
}

export default Page;
