'use client'
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useCallback } from "react"
import { TbPhotoPlus } from "react-icons/tb"

declare global {
    var cloudinary: any
}

interface ImageUploadProps {
    onChange: (value: string) => void
    value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
}) => {
    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url)
    },[onChange])
    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="kksxtcrs"
            options={{
                maxFiles: 1
            }}
        >
            {({open}) => {
                return (
                    <div
                    onClick={() => open ?. ()}
                    className="
                    relative
                    cursor-pointer
                    hover:opacity-70
                    transition
                    border-dashed
                    border-2
                    p-20
                    border-neutral-300
                    flex
                    flex-col
                    justify-center
                    items-center
                    text-neutral-600
                    gap-4
                    ">
                        <TbPhotoPlus size={50} />
                        <div className="font-semibold text-lg">
                            Click to upload
                        </div>
                            <Image 
                                alt="upload"
                                fill
                                 style={{ objectFit: 'cover'}}
                                 src={value}
                            />
                    </div>
                )
            }}
            </CldUploadWidget>
    )
}

export default ImageUpload