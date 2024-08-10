export const PlaceCard = ({ place, image, }: { place: string, image: string }) => {
    return <div className="flex flex-col">
        <img src={image} className="h-32 w-44 mt-5 mb-2 rounded-lg" />
        <h6 className="text-lg font-semibold">{place}</h6>
    </div>
}