import Image from 'next/image';

const SimpleImage = () => {
  return (
    <div>
      <Image
        src="/profile/1661913755248.jpg" 
        alt="Profile"
        width={200}
        height={200}
        />
    </div>
  );
};

export default SimpleImage;