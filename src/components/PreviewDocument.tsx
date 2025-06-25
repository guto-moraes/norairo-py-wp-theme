// Create Document Component
const PreviewDocument = ({ fileName, url }: { fileName?: string; url: string }) => (
  <div className="w-full h-full max-h-full rounded-lg overflow-y-auto overflow-x-hidden">
    <img src={url} title={`Pre-visualização do Arquivo ${fileName}`} className="object-cover w-full" />
  </div>
);

export default PreviewDocument;
