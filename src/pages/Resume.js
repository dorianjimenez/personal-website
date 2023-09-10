import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const pdfURL = '/path-to-your-resume.pdf'; // Replace with the actual URL or file path of your PDF resume

    return (
        <div className="container mx-auto mt-6">
            <h1 className="text-2xl font-bold mb-4">My Resume</h1>
            <div className="pdf-container">
                <Document file={pdfURL} loading={<div>Loading PDF...</div>}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    );
}

export default Resume;
