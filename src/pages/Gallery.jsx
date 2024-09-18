import Header from "../components/Header";
import Text from "../components/Text";
import PictureZoom from "../components/PictureZoom";

export default function Gallery() {
    const images = [
        { src: '/images/gallery/IMG-89888ca391372e4710ee8cbdfedaaa34-V.jpg', alt: 'Image 1' },
        { src: '/images/gallery/IMG-5b5f359d31616dc2bb6bd3586fcfb1bf-V.jpg', alt: 'Image 2' },
        { src: '/images/gallery/IMG-99b6d5e1b6dc022db54fff91a2a3d42c-V.jpg', alt: 'Image 3' },
        { src: '/images/gallery/IMG-72f77ebdb215c4dd7d014b94c48aeb7d-V.jpg', alt: 'Image 4' },
        { src: '/images/gallery/IMG-5b5f359d31616dc2bb6bd3586fcfb1bf-V.jpg', alt: 'Image 5' },
        { src: '/images/gallery/IMG-fded88d5f5b4558b6971891b80823540-V.jpg', alt: 'Image 7' },
        { src: '/images/gallery/IMG-ec8c3120270d07277525d7c61d746eba-V.jpg', alt: 'Image 8' },
      ];

    return (
        <div className="main-content text-center color-red">
            <Header t d>Gallery</Header>
            <h1 style={{position: "relative"}}><Text word="Gallery" /></h1>
            <PictureZoom images={images} />
        </div>
    )
}