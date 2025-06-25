import { useQueryTranscriberPhoto } from "@/queries/team";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const TranscriberPhoto = ({ transcriberId }: { transcriberId: string }) => {
  const id = transcriberId.trim().split(" ").join("-").toLowerCase();
  const { data } = useQueryTranscriberPhoto(id);

  return (
    <li className="rounded-md drop-shadow-sm bg-white/65 p-2.5 flex items-center gap-2">
      <div className="rounded-full size-12 bg-cover bg-center">
        {
          data && (
            <img
              src={`${BASE_URL}${data.membro.featuredImage.node.filePath}`}
              alt={transcriberId}
              title={transcriberId}
              className="rounded-full size-12 aspect-square ojbect-cover"
            />
          )
        }
      </div>
      <hgroup className="h-11 flex flex-col justify-center">
        <h2 className="text-primary-600 text-[12.5px] font-bold">
          {transcriberId}
        </h2>
        <p className="text-[11px] text-secondary-700">Transcritor do arquivo</p>
      </hgroup>
    </li>
  );
};

export default TranscriberPhoto;
