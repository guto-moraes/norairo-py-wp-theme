import Main from "@/layouts/Main";
import Container from "@/layouts/Container";
import Title from "@/components/Title";
import DataLoading from "@/components/DataLoading";
import Errors from "@/components/Errors";
import CoordinatorTeam from "@/components/CoordinatorTeam";
import MembersTeam from "@/components/MembersTeam";
import { useQueryTeam } from "@/queries/team";
import type { memberTypes } from "@/types/team";
import cn from "@/utils/cn";

const Team = () => {
  const { data, isPending, isError, error } = useQueryTeam();

  if (isPending) return <DataLoading />;
  if (isError) return <Errors message={error.message} />;

  const transcribers = data.membros.nodes.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return (
    <Main className="py-10 xl:py-16 dark:bg-primary-900 h-full">
      <Container>
        <Title title="Equipe de Trabalho" className="uppercase" />
        <h2 className="text-xl xl:text-3xl text-secondary-600 dark:text-sky-400 font-extrabold mb-8">
          Coordenador
        </h2>
        <section
          className={cn(
            "rounded-2xl shadow-lg bg-white/55 dark:bg-slate-950 p-4 w-full max-w-screen",
            "grid auto-rows-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
          )}
        >
          {data.membros.nodes.map((member: memberTypes) => {
            if (member.categories.nodes[0].slug === "coordenador") {
              return <CoordinatorTeam key={member.id} member={member} />;
            }
          })}
        </section>
        <h2 className="text-xl xl:text-3xl text-secondary-600 dark:text-sky-400 font-extrabold mb-8">
          Bolsistas da Equipe de Transcrição
        </h2>
        <section className="grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {transcribers.map((member: memberTypes) => {
            if (member.categories.nodes[0].slug === "bolsistas") {
              return <MembersTeam key={member.id} member={member} />;
            }
          })}
        </section>
      </Container>
    </Main>
  );
};

export default Team;
