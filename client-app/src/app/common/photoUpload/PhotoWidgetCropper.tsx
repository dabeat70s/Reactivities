import React, {  useRef } from 'react';
import 'cropperjs/dist/cropper.css';
//var Cropper = require('react-cropper');
import Cropper from 'react-cropper';


interface IProps {
    setImage: (file: Blob) => void;
    imagePreview: string;
  }

const PhotoWidgetCropper:React.FC<IProps> = ({setImage, imagePreview}) => {
    // const cropper = useRef<Cropper | null>(null);
    // const cropImage = () => {
    //     if (
    //       cropper.current &&
    //       typeof cropper.current.getCroppedCanvas() === 'undefined'
    //     ) {
    //       return;
    //     }
    //     cropper &&
    //       cropper.current &&
    //       cropper.current.getCroppedCanvas().toBlob((blob: any) => {
    //         setImage(blob);  console.log('cropper inside ' ,cropper.current);
    //       }, 'image/jpeg');
         
    //   };

    const cropperRef = useRef<HTMLImageElement>(null);
    const onCrop = () => {  
      const imageElement: any = cropperRef?.current;
      const cropper: any = imageElement?.cropper;
      if(imageElement && typeof cropper.getCroppedCanvas() === 'undefined' )
      return;
      
      cropper.getCroppedCanvas().toBlob((blob: any) => {
        setImage(blob);
      }, 'image/png');
    //   console.log('todataurl  =', cropper.getCroppedCanvas().toDataURL());
    //   console.log('getCroppedCanvas  =', cropper.getCroppedCanvas());
    //   console.log('cropperRef  =', cropperRef);
    //   console.log('cropperRef  =', imageElement);
      //console.log('todataurl', cropper.getCroppedCanvas().toDataURL());

    };
      //{console.log('onCrop photwidcropp',onCrop)}
     

    return (
        <Cropper
        ref={cropperRef }
        src={imagePreview}
        style={{height: 200, width: '100%'}}
        // Cropper.js options
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
