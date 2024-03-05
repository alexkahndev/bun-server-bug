import React, { useState } from 'react';
import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";

const DesignStudioUpload = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',);
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file){
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    }
};
return(
        <html>
          <head>
            <meta charSet="utf-8" />
            <title>Design Studio Upload - Logo365.AI</title>
            <meta name="description" content="Upload your logo" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/styles/DesignStudioUpload.css" />
            <link rel="icon" href="/assets/favicon.ico" />
          </head>
          <body>
          <div className="container">
            <Navbar />
            <div className="content">
              <div className="start-container">
                <h2>To get started, please upload your logo</h2>
                <div className="image-upload">
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {selectedImage && (
                    <div className="image-preview">
                        <img src={selectedImage} alt="Uploaded" />
                    </div>
                )}
            </div>
                <button className="start-button">Continue</button>
              </div>
          </div>
            <Footer />
        </div>
        </body>
    </html>
);
};

export default DesignStudioUpload;

