// Create Document Component
const PDFDocument = ({ fileName, url }: { fileName?: string; url: string }) => (
  <object
    data={url}
    type="application/pdf"
    className="w-full h-full max-h-[1000px] rounded-lg"
  >
    <div className="h-full flex justify-center items-center">
      <p>
        Seu navegador não oferece suporte para arquivos no formato PDF.{" "}
        <a
          href={url}
          title={fileName ? fileName : "Salvar ofício no formato PDF"}
          className="text-sky-600 hover:text-secondary-600 font-bold transition-colors duration-300"
        >
          Baixar o Arquivo
        </a>
        .
      </p>
    </div>
  </object>
);

export default PDFDocument;
