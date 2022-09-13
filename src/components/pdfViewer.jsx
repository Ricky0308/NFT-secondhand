import React from "react";

/* PDF表示 */
import {Viewer, Worker } from '@react-pdf-viewer/core';
import {SpecialZoomLevel} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function PDFViewer(){

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTab) => [],
      });

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                <div style={{ 
                    width: '100%',
                    height: '450px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop:'auto',
                    marginBottom:'auto',
                  }}>
                    <Viewer
                      fileUrl={`${process.env.PUBLIC_URL}/sample_manga.pdf`}
                      defaultScale ={SpecialZoomLevel.PageFit}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                </div>
        </Worker>
    )

}
