type PhotoModalProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    url?: string;
};

export const PhotoModal = ({ open, setOpen, url }: PhotoModalProps) => {
    return (
        <div className=" transition-all duration-500 fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 " onClick={() => setOpen(false)}>
            <div className="bg-white p-4 max-w-screen-xl rounded-lg">
                <img src={url} alt="" className="w-full rounded-lg" />
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-0 right-0 m-4 bg-red-500 text-white px-2 py-1 rounded"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};