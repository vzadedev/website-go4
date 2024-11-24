type PhotoModalProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    url?: string;
    size?: "small" | "medium" | "large"; // Nova prop para tamanhos
};

export const PhotoModal = ({ open, setOpen, url, size = "medium" }: PhotoModalProps) => {
    // Define o tamanho do modal com base na prop "size"
    const modalSizeClass = size === "large" 
        ? "max-w-screen-2xl" 
        : size === "small" 
        ? "max-w-md" 
        : "max-w-screen-xl";

    if (!open) return null;

    return (
        <div
            className="transition-all duration-500 fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
            onClick={() => setOpen(false)}
        >
            <div
                className={`bg-white p-4 w-full ${modalSizeClass} rounded-lg relative`}
                onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro
            >
                <img src={url} alt="" className="w-full rounded-lg" />
            </div>
        </div>
    );
};
