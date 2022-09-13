import React from "react";
import Modal from "@mui/material/Modal";

/* PDF表示 */
import {Viewer, Worker } from '@react-pdf-viewer/core';
import {SpecialZoomLevel} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function PDFViewer({pdf_file}){


    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTab) => [],  
    });

    /* モーダルの状態管理 */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
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
                      fileUrl={`${process.env.PUBLIC_URL}/sample_manga.pdf`} //Public配下（ローカル）を参照
                    //   fileUrl={`${process.env.PUBLIC_URL}/${pdf_file}`} //ネットワークのファイルを参照
                      defaultScale ={SpecialZoomLevel.PageFit}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                </div>
        </Worker>
        </Modal>
    )


}
