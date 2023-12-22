import { Button } from '@mui/material';
import React, { useEffect, useRef } from 'react';

const UploadWidget = ({ SetImage }) => {
    const CloudinaryRef = useRef();
    const WidgetRef = useRef();

    useEffect(() => {
        CloudinaryRef.current = window.cloudinary;
        WidgetRef.current = CloudinaryRef.current.createUploadWidget(
            {
                cloudName: 'dzcb8ldz7',
                uploadPreset: 'xcvxn0gb'
            },
            function (error, result) {
                if (error) {
                    console.error('Error during upload:', error);
                    return;
                }

                if (result && result.event === 'success' && result.info && result.info.secure_url) {
                    // Handle the successful upload here
                    console.log('Upload successful! Here is the result:', result);
                    // Extract the URL from the result object and use it as needed
                    SetImage(result.info.secure_url);
                } else if (result && result.event !== 'source-changed') {
                    // Handle other events if needed
                    console.log('Received event:', result.event);
                }
            }
        );
    }, [SetImage]);

    const handleUploadClick = () => {
        WidgetRef.current.open();
    };

    return (
        <>
            <h3>Upload An Image</h3>
            <Button onClick={handleUploadClick}>Upload</Button>
        </>
    );
};

export default UploadWidget;
