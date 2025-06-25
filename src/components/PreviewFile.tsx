// Create Document Component
const PDFDocument = ({ fileName, url }: { fileName?: string; url: string }) => (
  <div className="w-full h-full max-h-[1000px] rounded-lg">
    <img
      src={url}
      title={fileName ? fileName : "Pre-visualização do Arquivo"}
      className="object-cover w-full"
    />
  </div>
);

export default PDFDocument;
