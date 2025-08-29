export const MarqueImg = ({ img }: {img: string }) => {
  return (
    <img 
        src={img} 
        alt="" 
        className="h-44 w-44 xl:w-52 xl:h-52 mx-12 grayscale xl:mx-16 object-contain"
    />
  )
}
