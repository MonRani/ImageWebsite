const fetchImages = async (count = 10) => {
    return Array.from({ length: count }, (_, i) => `https://picsum.photos/300/200?random=${i}`);
  };
  
  export default fetchImages;
  