import { Header } from ".";

interface IProjectContainer {
  title: string;
  githubHref: string;
  description?: string;
  children: React.ReactNode;
}

const ProjectContainer: React.FC<IProjectContainer> = ({
  title,
  githubHref,
  description,
  children,
}) => (
  <>
    <Header title={title} githubHref={githubHref} description={description} />
    <main className="flex-1 flex-col pb-8 text-center">{children}</main>
  </>
);

export default ProjectContainer;
