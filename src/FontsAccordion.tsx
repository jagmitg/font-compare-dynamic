import React, { useState } from "react";

interface FontData {
    fontName: string;
    className?: string;
    samples?: string[];
}

interface FontsAccordionProps {
    title: string;
    fontsData: FontData[];
    onFontSelect?: (selectedFont: string) => void;
    isBadFont: boolean;
}

const FontsAccordion: React.FC<FontsAccordionProps> = ({
    title,
    fontsData,
    onFontSelect = () => {},
    isBadFont
}) => {
    const [openPanel, setOpenPanel] = useState<string | null>(null);

    const handlePanelClick = (fontName: string) => {
        setOpenPanel(fontName);
        if (onFontSelect) onFontSelect(fontName);
    };

    // Function to convert fontName to a className if className is not provided
    const fontNameToClassName = (fontName: string) => {
        return fontName.replace(/\s+/g, "-").toLowerCase();
    };

    return (
        <div>
            <h1>{title}</h1>
            {fontsData.map((font, index) => (
                <div key={index}>
                    <button onClick={() => handlePanelClick(font.fontName)}>{font.fontName}</button>
                    {(openPanel === font.fontName || !isBadFont) && (
                        <div>
                            {(font.samples || ["H1", "H2", "H3", "H4", "H5", "P"]).map((tag, tagIndex) => (
                                <div
                                    key={tagIndex}
                                    className={
                                        font.className ? font.className : fontNameToClassName(font.fontName)
                                    }
                                >
                                    {React.createElement(
                                        tag.toLowerCase(),
                                        null,
                                        `${tag} text in ${font.fontName}`
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FontsAccordion;
