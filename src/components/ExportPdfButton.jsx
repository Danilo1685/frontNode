import jsPDF from "jspdf";
import {autoTable} from 'jspdf-autotable';


export default function ExportPdfButton({ type, data }) {
  const handleExport = async () => {
    const doc = new jsPDF();
    console.log(data);
    
    const headers = type === 'products'
      ? [['Nombre', 'Precio']]
      : [['Nombre', 'Email', 'Edad']];

    const rows = data.map(item => type === 'products'
      ? [item.nombre, item.precio]
      : [item.nombre, item.mail, item.edad]);

    autoTable(doc,{ head: headers, body: rows });
    doc.save(`${type}.pdf`);
  };

  return (
    <button onClick={handleExport} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
      Exportar {type === 'products' ? 'Productos' : 'Usuarios'} a PDF
    </button>
  );
} 
