import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/sanity-queries';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    const slugs = await getAllProjectSlugs();
    return slugs.map(({ slug }) => ({ slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} - ${project.techStack
            .slice(0, 3)
            .join(', ')}`,
        description: project.description,
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = await getProjectBySlug(slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
