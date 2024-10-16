// src/components/Heading.jsx
const Heading = ({ children, level = 1, align = "center", darkMode }) => {
    const Tag = `h${level}`; // Determina la etiqueta (h1, h2, etc.) según el nivel

    let textAlign
    switch (align) {
        case "center":
            textAlign = "text-center"
            break;
        case "left":
            textAlign = "text-left"
            break;
        case "right":
            textAlign = "text-right"
            break;
        default:
            break;
    }

    let size
    switch (level) {
        case 1:
            size = "text-3xl md:text-4xl py-4"
            break;
        case 2:
            size = "text-2xl md:text-3xl py-3"
            break;
        case 3:
            size = "text-xl md:text-2xl py-2"
            break;
        case 4:
            size = "text-lg md:text-xl py-1"
            break;
        default:
            break;
    }

    return (
        <Tag className={`font-semibold ${darkMode ? "text-white" : "text-primary"} ${size} ${textAlign}`}>
            {children}
        </Tag>
    );
};

export default Heading;
