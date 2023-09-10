import React from 'react';
import Iframe from 'react-iframe';

function Resume() {
    // Replace 'your_pdf_url.pdf' with the actual URL or path to your PDF file
    const pdfUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

    return (
        <div className="container mx-auto mt-4">
            <Iframe
                url={pdfUrl}
                width="100%"
                height="1000px" // You can adjust the height as needed
                id="resume-pdf"
                display="initial"
                position="relative"
                className='mb-10'
            />
        </div>
    );
}

export default Resume;
