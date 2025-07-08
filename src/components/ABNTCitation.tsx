import { formatAbntName } from "@/utils/formatAbntName";
import { dateTodayAbntFormat } from "@/utils/formatDate";

interface IABNTCitation {
  author: string;
  title: string;
  box: string;
  documentCreatedAt: string;
  url: string;
}

const ABNTCitation = ({
  author,
  title,
  box,
  documentCreatedAt,
  url,
}: IABNTCitation) => {
  return (
    <>
      {formatAbntName(author)}. <strong>{title}</strong>.{" "}
      {box && `Controle da descrição: ${box}. `}{documentCreatedAt}.
      Disponível em: {url}. Acesso em: {dateTodayAbntFormat()}.
    </>
  );
};

export default ABNTCitation;
