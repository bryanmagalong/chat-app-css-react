import React from 'react';

import dog1 from '../../assets/images/dog-image-1.jpg';
import dog2 from '../../assets/images/dog-image-2.jpg';
import dog3 from '../../assets/images/dog-image-3.jpg';

const SharedPictures = () => {
  const dogPictures = [ dog1, dog2, dog3 ];

  return (
    <div className="self-end flex my-message-bottom gap-x-2">
      {dogPictures.map((picture, index) => (
        <img
          className="w-picture h-picture rounded-picture"
          key={`dog ${index + 1}`}
          src={picture}
          alt={`dog ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SharedPictures;
