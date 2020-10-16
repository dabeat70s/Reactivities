import React, {  useRef } from 'react';
import 'cropperjs/dist/cropper.css';
//var Cropper = require('react-cropper');
import Cropper from 'react-cropper';


interface IProps {
    setImage: (file: Blob) => void;
    imagePreview: string;
  }

const PhotoWidgetCropper:React.FC<IProps> = ({setImage, imagePreview}) => {
   

    const cropperRef = useRef<HTMLImageElement>(null);
    const onCrop = () => {  
      const imageElement: any = cropperRef?.current;
      const cropper: any = imageElement?.cropper;
      if(imageElement && typeof cropper.getCroppedCanvas() === 'undefined' )
      return;
      
      cropper.getCroppedCanvas().toBlob((blob: any) => {
        setImage(blob);
      }, 'image/png');
   

    };     

    return (
        <Cropper
        ref={cropperRef }
        src={imagePreview}
        style={{height: 200, width: '100%'}}
        aspectRatio={1 / 1}
        preview='.img-preview'
        guides={false}
        viewMode={1}
        dragMode='move'
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={onCrop} />
      
    );
}

export default PhotoWidgetCropper
