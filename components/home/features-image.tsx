import Image from "next/image";

export const FeaturesImage = () => (
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                    src="/file-upload-preview.jpg"
                    alt="uploading preview"
                    width={1419}
                    height={732}
                    quality={100}
                    className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 sm:p-8 md:p-20"
                />
            </div>
        </div>
    </div>
);
