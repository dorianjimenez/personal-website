import React from 'react';
import Iframe from 'react-iframe';
import { AiOutlineExport } from 'react-icons/ai';

function Resume(props) {
    // Replace 'your_pdf_url.pdf' with the actual URL or path to your PDF file
    const pdfUrl = '/resume.pdf';

    return (
        <div className="container mx-auto mt-4">
            {/* If screen size is small, put resume here in green button with link that opens externally in new tab */}
            {props.isSmallScreen ? (
                <a
                    href={pdfUrl} // Replace with the actual URL of your resume
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 mt-5 rounded-md text-center inline-flex items-center hover:bg-green-600"
                >
                    Jimenez, Dorian Resume <AiOutlineExport className="ml-1" />
                </a>
            ) :
                <Iframe
                    url={pdfUrl}
                    width="100%"
                    height="1000px" // You can adjust the height as needed
                    id="resume-pdf"
                    display="initial"
                    position="relative"
                    className='mb-10'
                />
            }


        </div>
    );
}

export default Resume;
